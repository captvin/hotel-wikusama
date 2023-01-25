const { Ability, AbilityBuilder } = require('@casl/ability')
const { user, pemesanan,detail, kamar, tipe } = require('@models')

const abilities = (id, role) => {
    const { can, cannot, build } = new AbilityBuilder(Ability)

    switch (role) {
        case 'admin':
            can('manage', [ tipe, kamar, user, detail, pemesanan])
            break;
        case 'resepsiomis':
            // can('create', [transaksi, detail])
            can('read', [detail, transaksi, user, kamar,tipe])
            can('update', [transaksi,detail])
            can('update', user, { id })
            // can('delete', [transaksi,detail])
            break;
        default:
            break;
    }

    return build()
}

module.exports = abilities