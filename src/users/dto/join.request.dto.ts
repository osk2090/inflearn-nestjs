import { ApiOperation, ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'osk2090@naver.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: 'buzz',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: 'osk',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
