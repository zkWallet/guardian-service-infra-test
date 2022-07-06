import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from 'src/account/service/account.service';
import { decodePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.accountService.findOne(username);
    if (user && decodePassword(pass, user.passwordHash)) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
