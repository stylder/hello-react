import React from 'react';

const initialState = {
    num1: '',
    num2: '',
    skarleth: true,
    operacion: null,
    mostrar: '',
    usuarios: [
        /* {
            avatar: 'https://pbs.twimg.com/profile_images/809934481272340480/NNXvKkOG_400x400.jpg',
            first_name: 'Jorge',
            email: 'jorge@oruss.com.mx'
        },
        {
            avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rami-malek-mr-robot-1548425194.jpg?crop=1xw:0.9969325153374233xh;center,top&resize=480:*',
            first_name: 'Alberto Nepe',
            email: 'alberto@oruss.com.mx' 
        },
        {
            avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXFxcYFxUVFRUXFRcVFxUWFxUVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICUtLS0tLS0rLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0rLS0tLS0tLf/AABEIANUA7QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAgMFBgcBAP/EAEIQAAEDAgQDBQQGCQMEAwAAAAEAAgMEEQUSITEGQVEiYXGBkRMyocEHFFKxstEjM0JicnPh8PEkksIVY4KiNENT/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EACURAAICAgMAAgMAAwEAAAAAAAABAhEDEgQhMRNBIlFxBSMyFP/aAAwDAQACEQMRAD8Apz11jk6Y01JFZZLPRhMZCU4BAseQiAVyJFhLaQmrJuVimgGWSinGXkk10gKrcQIO5REeY811HJjkxTbXBLFOSmpqYhSS0MyAXXomglNSMKTC1zTdSCXzhqiZlvYXU3U07SNgqJQYrJHq0qyYBiUk5IdbyQtWgF+LC4zlGqErYr6hWk0DS0quVrCwkHZZeXFKDs1cWZT6+yNi0TVVIiHEFBztK6HoUvAeWO4SIIyN11zyE9TuvurSZVkuxuc6IB1lJ1DRZBOpkcWKkgZ0ATRjsijEQmHlNQmSCozYJqaaxsno9kxM0XREI4ZAUlzQm3RJIBXJHD0bBdE2QkLtUXmXEWBZ155um2glOBqixyQy1qIa1eT0IUWTR5oskv8ABEZUbhNJ7SQNXbUc40RjIHHZjiO5pT0UduR8wtVouGrNFjbTZQfEODOj7RaLdQplsldC4ZIylVlRa2wQkoBUzI5tkA9gKWpFlx6IwxrhYjnRBDYpVxwMDnDM4+6zr3noEa7dITKkrYqKn7OZxDW66k9OnVJZxNFT/qn3dzJa4t+Gh9VVqqrmnOd7rNG22UDo2P8ANcFZEPca+Rw3c99reDBorMcPXZSnyO+i7H6RpC3KCzMRochFvU2P9VI4dxOS0Cdzb6nOBo6+2+nPks2jnMhNhYgE2NnDQXHzQ0tbI46vzabHb0Qz4yl0FDlOPbNM9uxzrtkFidyNATycRsiXsLTleLH4EciDzCqvCE93a2N/eaN3DY25PHVp1001VzxgNEbQ2/s7/oydcjj+wXb5Ceuo8iBn5MOstTUx59kmBSUwKR7CwQcFdrYo/wBqCEFSQVxfZHTuOybBIUi1gJXpYx3JiYpxI/2iZfboiTCmJoiE1MVJDrGCyHni10SmvsuOkTEwKBshupmAAaWFlHl6Jjq7DYFWePljBvYCUWN1kQD9NLi9klka8QXOuSn4WpU5KUm0DRGBq85PCNeLFXsuUMtCKgakMjSs9lFnUHRwX5o7CT7GVridOajaaoRzpBZC2wmk0a9h9a1zAWuBB6FAcR1LchBssrgxCWM3Y8gdAdPRdqMelf7xunvO5R1oox4ms9rO151NlHyvKW+YlIIukpF4RBJu52jWtLie4An5Ki4niDpXknU3sB9kDkrRxHVeziyDd2/h9n++SqWHtzPy9dzztzCvcePTkzN5k+1BHaTDpZfdBIHPXL6qSpeGpz7oB87KeosQjzeyYDp0Btp3qZhcnbtlX40lZR5KKWAFuQ5naG/Q9OqAfQSjdjhfa4tfw6lac6IO3F/LVMYpmDdAHNA7THC9wpsBO3RndJO+J99R4ePMLSsMx320LyQ15sPasH/2M5vA5O015HfkqbjELbNdbsOvY89N2k8yNLHp4KJpap9PK1zb6dpttLhJy4lkV/Zbw5nidPwveIUw7ErHZmuuL6XuL2J6Otoe8FcimsEVQzwzMPsxYSDNlGgEjN3NHIHYt5Ed90C5llTS+mXpOu0EidKE90CSlBdogfkZIwlcmGiDbLZL9oo1C3FhibkgT8bkskLjuiLkYQmQ4o+ayYyokQzsMiMgkCCLUum5okLaLDJhfco+WhsVeXU4so2qpQqO0kaKcZFbZQpmWhU/7NDTkKVNnOCIZtJZOiNESyhBS1NkxOxb6H5IRZR8kQBTjq4d6YM10aFNjgjT9NAm4kdSHVc2EikcVkukdtlYco8QAHfHRROBNvJ5J3G6jO938Tj6lEcJw3eXnl9/JaS/HGZEnvmLJhMGVgvvzUrBumadg5nVFRMQRYc0Fxu7k3Va6c0/7EdQvGPfblr4ppUa7KjW0V2viJ0PaZ1Drn/CrNTHcBvNt7d2vaHqrvjEIbZ4uSDc2N97X06KsY1FkfmA0d9/NAnTH1asFwWZzZG5HEEHNzsQ0Em47hdaRNC09NQDcbahZdRvLXgg2IP+R5i4WjxR5dG+5u0b2DgHZfAEkDuskcjp2W+M7jQt1CE19QRAcnA+yr7MfSBDQFNmlcFKMnTntmqdmdqiFMZCRcqdc1pTbqRpU2RRAPJTYUxNSAIV1OpRDsBe9JhkOqKdTJsUpGyJAM0V9VZCvlzFR9TUWSqGa5WXbZqqKRIil0UViFOrNHbKoqvYmNUKUr6KzNGgJm2U3PGgpYE2MgZIiQy6figRbKeyJggROQCgNQ0yHxoOZBIW6HLv46FTjKddmw8PaWu2cLHwS1kp2G8dppGLujubHmrxw9QezpBJluXl1vIkfJQ7sKyidr9HAxlveCH2+4XVuwuoacPhbs5sjxbuOv3laeTJaSRlQx6ytlQraVwDnhjwRqSD38hzRdDPVhjX+9Gb2uNSB4gHkfQqwsjudUrEJA1mnhf1RxaoCSe1nIXn2WfuVfxDEqkC5LmR5g0usBvtcnRTkLrRgckS2nD/AHgHA7gi49FKFSK7hsTXFry+UlwuMwIBHlonuKaa8OYD3TfyOisMVPl0ta2yjeIWl0eUDVxDR3koX6FHyiiwtuR1uPvWkYTE8RDNqA4ta627RYgeIvbyVIqcJkjBc5tmhxaL6EnuG9u9X/h+QupGNcBcG4I+zqPXQJHJdotcX0USEl5CXJAUx7Mqsi5JA0spBTLpnJ2aI3TYamIUzoqyE+2u7017MFNmIKURY5LW96H+uJEkKHdGiQDbD21V0r2wUWLhezlERsXKogJTUFwVOup0FNAAdVlLo1un4Ew1eiHnluU37VoTsbA7ZERQFImHRqRkpSux0imwaI9lKSj6ehR0NOAjY2hT2yG1EHhpE86lARsbUt7Eax9CHmdmXfSDhDmj6xHy98Dl2rg26XJ9VE4RLentcB2bOB3EWd5aLU8XoWyRvY7ZzSD5hYrVtMTzE14dkcQHDS4PVW8D2jr+ivmSi914yz0kl0rENQGje90xgD80Qee/0CGx2vhy6udmFwMhsdf8KxH9FeTXpLth/Rd907SzADLzCpUeMvbHlLybGwI0doL2JPyVkwmuikY3K45xqQ43dbx5plNCG02FVFVJms1n/kSMvja9/JC4tXiOSJzhnDO04DTXYeet17Hq8xZbblQ9S+8bbnV7xmcdhzOqWwkiUlq5KxxjjYSHaC51aLgufbkLC3mrxSUXs4mRDXILE9XHVx9dPJE4DhrYYGMYLXGZ50u5x1Bv0AtYd6Oya6qlknt0i9ig49sinU6R9R7lMmIKcwnAcwDpLgcmj5rseOU3UQc2dY1bKHNhvcgZsPtyWtVHD0LhoC09QT81Ucawt0RsRcHZydPDPH6V4cqOR0Ut0FkgwKZljRNBg8k3uMJHVAmNckvSsOpyh5KYq5VuASx++wjvUXNTW5JiQv5E/GVl1MUk0pVgNOCvCmCkkuT2WVc4iqC0XCkMSxhrdLqu1uICQ25LM9Zrwi0uyvy4m+6svDWI5gAd0RFgkT2beaBoMPMUthsmSlGSOUJRftlxsDquBnQJ6mZ2QpzA8La/tO26dUePC5tJFXNnjiTbK4WkcinInK6VOERObbLY9QqDiTjE9zTyNkWbBLC1YHH5Uc9pdMlWOSnPVWGOa2ujBiGYJe9D/gscxerBY5oNiWkDxIWVYnw5JDA6V5BcTsL7akm6uWIvNySbDe50Ci5qn6xBIRqGyFrCeeVoBPqSPJOwSku14BmhCtfsgqCsP1FzWfrNAAN7uI2+KGpeHpBq4McSOdz/AJQNPMY36aC+xvoRyVvgeJI9HWPjqCr914ZrV+/REwYLIy1o4yb3ub32t06JqqwiVp9s0AEWJDNNBvZSUdLPmv7Wzep3t4ckRiFRkYGA5nFu/cpsW0mCcTtzyRBtu0AnYacF9MCwezDu0eRIsXk+p+CDw9jpXDdzvdY0a3cdB5aq+VeDxspqaJx7bpXNLh9ssz+nZI9Eqaai3+huJrZJ/YZT4uCkS15KjIsPMTyEWY1lX2bGqosOAESPaD1BWgMGiyvDan2Tg4clpGFV7ZWBw8x0K0+BNJtP0xP8jB7J/QaofienzQO01GoUwhaoB/6Pkfe8Oiv5FtFozounZlslLISOybc1qOFwNZEwNFhlHxG6UcPjtbILISSYwdm128uo7knHh0dsbkyvJ0Sbmg7i6hsewtjmOeGgOGugGo53UvDKHC4KZr5AGEHmLKw0mhK6ZlWJxsadAFI4FgZqGF17AGw036qZbhTHu0Zc8lZMKo/ZsykW1VJYnJlyeao0vTDK67nG6Y9ijpmi6ZIWYmela7DKCuc2zeSn6WEHtFVmEao92IECyCS76DvotdPVt2Vn4dr2lpZcAg3HeFk8Ekm4KfZjwZvIzwDiT/63VnBknCVpWZ3KwQnGm6Npmma0FziABuSsm4hrBNM97didPAaXQFfxcxzbduQ9CSG/HX4Kp4hjcrzYdhp5N09TufNWsjnnq1SKPHUOO27tkzUSxRXMjwD9kau9Ao6biwi4iYGgftP1d/tGg87qAcRvukmymPGh99hz5mR/89BdbicsgJkeT0Zy7jbr9ytXA1EH0YY79pz3X6do6qjTFaPwSMkQZzsPiL/NWYQj5XRUnkl7fZUuKcAcx5sO1vp+0Oviq/DXllmkEgcuh8FtOK4W2dlibOHuu6f0VPxHgOR5JuwH7VwAQPtAqNHF19BLLGUbumVP/rwsbA9425f0XaKmmqnta1p8eg7/AM1M4ZwPK6QNeWMG+bNcloO7We903HNaNg+ER07AyMeLv2iepKJQsTPJQDw3w6ylbydJb3uTb7hvf3qE44ryyWlYP2ZDJ59lo+F1dpTZZfxrNmqv4Wj4k/kpyJa0Dik97LRNjTTUGJ47Vrgjnqez48wioZmP9w3O9udutuiz2rndJIZDoTbbkQAB9yU1zt7m97gg2IPUHkst8Vfs2FzX5Ren3Vj4ZrzGCCbX1F1RcN4ie0WlaJB9rZ/+4b+d1P09fFMP0TrO/wDzfZrvJ3un4IPjlDsmU4ZVTLpNj7jo038FzC8VLX9sGx0v0VSpqsx3DwQehBulHiJl7WI70azTu2xUuLCqSNO+ux2vnbbxCruMYyxz7N1A0v3qpT4k13ulRFRijgTa+itf+rb0rLgOLuy4DEXB/ZJ9UWa1x3uVScNxQl93fFWiGpuFHzIJ8Z/os3DTg5rnW1vZTazmgx91O8ndp3Cmhx1B9l3wVjHnhr2VMvHybeGWzHVDvciD2im3QLDTPWNCqYEpUgygudsASfJPUrLKO4pqA2HLfV5A8hqfkmwjtJITlnpBsqslVJI5xc91ib2ubd2idZHohYQivaLWUUvDzzd9sfaQAm366JDCuPOqKjhohdLuS8Ui64gQ4Emw56eZNlqNCzK6Nw2c1o+H5rN8KaXVETesjPxj5LUKVwAIJ/Vvf5C+ZvlZyOCFZCTr6lsbS5xAAFySbAAcyVmmJ8YyzSn2Ti1jfdBAJd++QfgOSuzoxUXMjbs5McNHfvOH3Dlvvtn/ABbgv1WXOwdgm7f4TuPI/JTICCQy/EpnSNlMjs7TcOGhHpy7lpfC2OipjubCRuj2jr9odxWVPcBr5qX4epKqJv16Jt2tNiznJGPf06BQmFOJqFe/3e8rLeIpc1XN0Dsv+0BvyWm0lUyeNkzDdps4f17xsslnkzPe7q5x9SSun4Ri9HWIiMoaIpwuVdosoKa9dJ6IZr0sSIGhqJ7DuIXtGSSz2jbOM1vA7jyT3/UaWQ2OaI+T2fIj4qutk1TM6U8aY2OWSLnFQPbq2z2HZzLkeY3HmnmU2Y7Kk4LXSRTMLXHTv08LLS8NLHlso914v4G9nDyN0ieNxZbx5tojTOHnWzAJOseh2VufWsazcbKiY7iQc4hq6eNJqmdjyOV2gTEqq+yDjieU7CNdVIte1HdIFxtkTlLdwliQKSbK06OTeIYa0NDmHyWepGqwQSKscWkmUX2DBbzJv8lYGg3sVUcdqs8zjfY5R4N0V7iK5mfznWOgKNyeCHabJxjv8LTMUfBTYOqTdcuuOHXn5pDl1yQT3KSGSXCjM1XF3En0aT8lo0NMPaPcTcOynLb9potfv2GncqFwOy9Xfox5+4fNX/MjQmXoRNo7uKrvHZb9VcXb5mBniQ+4+fkrG/ULPPpCrS6WOEbNbmP8TtvgPiuZEfSvub2fBanw3IfqsJZa2QdnvGh+IKzANWgcES3pGjm17x/7X+aiIeQOli+rR1EjOyxzHuMY2bIWntM6X0uPNZtGFo3GUuWjk/eyt9XC/wALrOmHzUTOxjt+i4HpDiuZkDQ5BAcvZ0wCvB6W0GmEh9lyWRDZl1z/AJf1Q0GdabOB71fMDny0oIOmcka/aF3D1BWfOcrNwZPnZJB17TR+8OnxCVmX42P48vyokqvEXvNsxsm42pjLYohirF+jqX7MpLN0fGzREmBQFKkQ1bg5oJuLhFOiQc0GqoKmaLTJDiKZjWZ22u0E/l8Vl7zcm6vXELCKZ5/h/EFRXLT4K/Fsx/8AIupJHi7qlByadt3pbT3rQozB26RftDVcJXgdl1EDz0kjmuOK85ykgsvATf00p6Rgerv6K6FVHgBus57mD4uKtzUSEy9CY9lkmM1HtKuR3V5A8G9kfctYaeye4FY9T6yOPefW66QeMJAV1+j3WOUfvg+rf6KlO/sq4fR1J+ub/AfxD8lETp+Bn0iS2gjb9qT8LSfmFQYzb5K3/SNL2oG9zz6kD5KnsKiXpMPAgFNyrwKbkdqhGHS5ezd6QSvNUBI7nSsyZXg5C0GmPEp/Ba0w1DXDw+5C38Ey87FC42qCi6aZp9TShxzN2Oo89UM5ll3BqkugjP7gB8QT/RdnKzFabTNl04poHDtUeyXRRjzqi4naJgsNCQWi+q61ekCzzSILjiW7Yo27OzOd35bAD4qlVNr2Vm4rqP0gbyYz4uN/usqs52q2uJGsaPO82V5WccbD++iUOSTJqD4c/BchdceQVspjrlwO1H98lxu6446jx+SkhjzyvNavOXQuILhwA3sTH95o+B/NWqNVjgH9VN/MH4QrQwIkJfp2oNo3n9x34Sshpd1reJO/QSnpG/8ACVktKF0g4D0jlZvo+f8A6l7b+9Efg5v5lVeTxVk4AP8ArB/Lf8lCJl4K+kKT/Utb9mNvqXOVZaVNccyXrZP3Qxvo0H5qEzLmdHwdBSHhe1SXlCwzpTZNlwm/zXFAR526812iakSozooCTHSU1Ibrt0kqKJsvXDj7QR97b/Eg/cpSRt1V+FawmMsP7DtPB3L1B9VaIn6LMyrWbNnDLbGgGobZeikUk3DXS6NU1T8H9ntHVdF7eETaj6RNl0DVOSNUfitRkhkdzy2HidPmqUVbSNCctU2UjiCqzyOI2LifLYfAKL6Lsr8zifTwSXBehhHVJHlsktpNiwD/AHshac6bbXCdCYhdZzh33TBX2FtSJTt4hdYbJFQdCfA+hUIlhQbok3StN1znuuILrwB+pl/mD8IVoBVZ4CH6GX+Z/wAGqyA3RITL0Hx2TLSzH/tu+It81l0A+5aTxK61HP8Aw/8AILNYzp3LmMx+C37qyfR6L1g/lv8A+I+aq5fqrf8ARwP9U49In/iYoR0vCD4ikz1U56yO+Bt8kBb1XpZsznO5uc53qSfmkBR9kodTT0sFNyLmSjy5mXhf+/NJJQhjT3LjU3K7UJd/BTRw6wrzgk3XRMWuBHIgjTTTkUIRbMJhZkdMz3ZMlxybI3MHt8L2P/kpqF2ijaeBrGSZNI3lkrR9kkEOA7vdRFO820WVm7k2beFaxSZZsBxBrTZ2hvfVW043HYahZ1T0bnaon6u4JEMrx3qwsnGWR3JHaScvja47ndV7jactia0ftON/IH8/gvLyLjr/AHr+jOU38Ev4U1g3K8QvLy3UebYjOgmu/SHvXl5SgGGlcnHYPgV5eUBsfj28koN+S4vLgWX/AIBZ/pXHrI78LVNnQry8jEv0j+Kf/hzeA+8LM2HTzXl5CxuPwaa/XbmrpwG6z6h3MU7/ALwvLy46XhUGu0TjSvLyE4U7ZNSldXlzCEu0skSfJeXlASBHalONP9+S8vIjkLaVxy6vISS7YY8uoWk7js+TXWCfwxy8vLJy+y/puYn1H+IsdDL3KS9iOi8vKgWpumf/2Q==',
            first_name: 'Santiago Nepe',
            email: 'santiago@oruss.com.mx' 
        }, */
    ]
};

class Calculadora extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }


    componentWillMount() {
        //GET
        //POST ...
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(users => {
                console.log(users)
                this.setState({
                    usuarios: users.data
                })
            })
    }

    resetState() {
        this.setState(initialState);
    }

    resolver(value) {
        const { mostrar, num1, num2, skarleth, operacion } = this.state;

        if (value === '.') {
            if (skarleth) {
                if (num1.indexOf(value) === -1) {
                    this.setState(state => ({
                        num1: num1 + value,
                        mostrar: mostrar + value
                    }));
                }
            } else {
                if (num2.indexOf(value) === -1) {
                    this.setState(state => ({
                        num2: num2 + value,
                        mostrar: mostrar + value
                    }));
                }
            }
        } else if (Number.isInteger(value)) {
            if (skarleth) {
                this.setState(state => ({
                    num1: num1 + value,
                    mostrar: mostrar + value
                }));
            } else {
                if (num2.indexOf('.')) {
                    this.setState({
                        num2: num2 + value,
                        mostrar: mostrar + value
                    });
                }
            }
        } else {
            if (value === 'c') {
                this.resetState();

            } else if (operacion) {
                this.setState(state => ({
                    mostrar: mostrar.replace(operacion, value),
                    operacion: operacion,
                }))

            } else if (value === '=') {
                this.setState(state => ({
                    mostrar: this.calcular(operacion),
                }));
                this.setState(state => ({
                    num1: '',
                    num2: '',
                    operacion: null,
                }))
            } else if (value === '+') {
                this.setState(state => ({
                    skarleth: false,
                    operacion: '+',
                    mostrar: mostrar + value
                }));
            } else if (value === '-') {
                this.setState(state => ({
                    skarleth: false,
                    operacion: '-',
                    mostrar: mostrar + value
                }));
            } else if (value === '*') {
                this.setState(state => ({
                    skarleth: false,
                    operacion: '*',
                    mostrar: mostrar + value
                }));
            } else if (value === '/') {
                this.setState(state => ({
                    skarleth: false,
                    operacion: '/',
                    mostrar: mostrar + value
                }));

            }
        }
        console.log('>>', this.state);
    }

    calcular(operacion) {
        let resultado = 0;
        const { num1, num2 } = this.state;

        if (operacion === '+') {
            resultado = Number(num1) + Number(num2);
        } else if (operacion === '-') {
            resultado = num1 - num2;
        } else if (operacion === '/') {
            resultado = num1 / num2;
        } else if (operacion === '*') {
            resultado = num1 * num2;
        } else {
            resultado = 1111
        }
        return resultado;
    }

    handleChange = (e) => {

        this.setState({
            mostrar: e.target.value
        })
        console.log(this.state)
    }

    render() {
        const {
            mostrar,
        } = this.state;

        return (
            <div className="">

{this.state.usuarios.map(function(usuario, index){
    return <div>
    <img src={usuario.avatar}/>
    <br/>
    <a>
        {usuario.first_name}  {usuario.last_name}
    </a>
    <br/>
    <a>
        {usuario.email}
    </a>
</div>;
  })}
                

                {/* <table border="1">
                    <tr>
                        <td colspan="3">
                            <input type="text" value={mostrar} onChange={this.handleChange} />
                        </td>
                        <td><button onClick={() => this.resolver('c')}>c</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.resolver(1)}>1</button></td>
                        <td><button onClick={() => this.resolver(2)}>2</button> </td>
                        <td><button onClick={() => this.resolver(3)}>3</button> </td>
                        <td><button onClick={() => this.resolver('/')}>/</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.resolver(4)}>4</button></td>
                        <td><button onClick={() => this.resolver(5)}>5</button> </td>
                        <td><button onClick={() => this.resolver(6)}>6</button> </td>
                        <td><button onClick={() => this.resolver('-')}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.resolver(7)}>7</button></td>
                        <td><button onClick={() => this.resolver(8)}>8</button> </td>
                        <td><button onClick={() => this.resolver(9)}>9</button> </td>
                        <td><button onClick={() => this.resolver('+')}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={() => this.resolver('.')}>.</button></td>
                        <td><button onClick={() => this.resolver(0)}>0</button> </td>
                        <td><button onClick={() => this.resolver('=')}>=</button> </td>
                        <td><button onClick={() => this.resolver('*')}>*</button></td>
                    </tr>
                </table> */}
            </div>
        );
    }
}
export default Calculadora;