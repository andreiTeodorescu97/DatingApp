using System;
using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        //maps from one object to another
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
            .ForMember(
            destination => destination.PhotoUrl, 
            options => options.MapFrom( source => source.Photos.FirstOrDefault(x => x.IsMain == true).Url))
            
            .ForMember(
            destination => destination.Age, 
            options => options.MapFrom( source => source.DateOfBirth.CalculateAge()));

            CreateMap<Photo, PhotoDto>();

            CreateMap<MemberUpdateDto, AppUser>();

            CreateMap<RegisterDto, AppUser>();

            CreateMap<Message, MessageDto>()
            .ForMember(
                dest => dest.SenderPhotoUrl,
                options => options.MapFrom(source => source.Sender.Photos
                .FirstOrDefault(x => x.IsMain == true).Url)
            )
            .ForMember(
                dest => dest.RecipientPhotoUrl,
                options => options.MapFrom(source => source.Recipient.Photos
                .FirstOrDefault(x => x.IsMain == true).Url)
            );

            CreateMap<DateTime, DateTime>().ConvertUsing(d => DateTime.SpecifyKind(d, DateTimeKind.Utc));
        }
    }
}