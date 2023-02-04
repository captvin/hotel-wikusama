const { Ability, AbilityBuilder } = require('@casl/ability')
const { user, pemesanan,detail, kamar, tipe } = require('@models')

const abilities = (id, role) => {
    const { can, cannot, build } = new AbilityBuilder(Ability)

    switch (role) {
        case 'admin':
            can('manage', [ tipe, kamar, user, detail, pemesanan])
            break;
        case 'resepsionis':
            can('read', [detail, pemesanan, user, kamar,tipe])
            can('update', [transaksi])
            can('update', user, { id })
            break;
        case 'guest':
            can('read', [detail, pemesanan, kamar, tipe])
            can('create', [pemesanan, detail])
            break;
        default:
            break;
    }

    return build()
}

module.exports = abilities