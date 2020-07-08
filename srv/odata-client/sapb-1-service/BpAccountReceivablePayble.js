"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpAccountReceivablePayble = exports.BpAccountReceivablePaybleField = exports.createBpAccountReceivablePayble = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BpAccountReceivablePayble.build]] instead.
 */
function createBpAccountReceivablePayble(json) {
    return BpAccountReceivablePayble.build(json);
}
exports.createBpAccountReceivablePayble = createBpAccountReceivablePayble;
/**
 * BpAccountReceivablePaybleField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpAccountReceivablePaybleField = /** @class */ (function (_super) {
    __extends(BpAccountReceivablePaybleField, _super);
    function BpAccountReceivablePaybleField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BpAccountReceivablePayble.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new v4_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpAccountReceivablePayble.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        return _this;
    }
    return BpAccountReceivablePaybleField;
}(v4_1.ComplexTypeField));
exports.BpAccountReceivablePaybleField = BpAccountReceivablePaybleField;
var BpAccountReceivablePayble;
(function (BpAccountReceivablePayble) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AccountCode: function (accountCode) { return ({ accountCode: v4_1.edmToTs(accountCode, 'Edm.String') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); }
        });
    }
    BpAccountReceivablePayble.build = build;
})(BpAccountReceivablePayble = exports.BpAccountReceivablePayble || (exports.BpAccountReceivablePayble = {}));
//# sourceMappingURL=BpAccountReceivablePayble.js.map