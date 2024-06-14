import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { LocalStrategy } from './auth/strategies/local.strategy';

@Module({
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  exports:[AuthService],
  imports: [UsersModule, 
    JwtModule.register({
      secret: jwtConstants.secret, // Replace with your secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ]
})
export class AuthModule {}
