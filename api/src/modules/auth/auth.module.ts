import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/modules/auth/local.strategy';
import { UsersModule } from 'src/modules/users/users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/modules/auth/jwt.startegy';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { jwtConstants } from 'src/modules/auth/constants';

@Module({
    imports: [ UsersModule, PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {
            expiresIn: '600s'
        }
    })],
    providers: [AuthService, LocalStrategy, JwtStrategy, {
        provide: APP_GUARD,
        useClass: JwtAuthGuard
    }],
    exports: [AuthService]
})
export class AuthModule {}
