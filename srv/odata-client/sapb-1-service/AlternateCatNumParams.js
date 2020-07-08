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
exports.AlternateCatNumParams = exports.AlternateCatNumParamsField = exports.createAlternateCatNumParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AlternateCatNumParams.build]] instead.
 */
function createAlternateCatNumParams(json) {
    return AlternateCatNumParams.build(json);
}
exports.createAlternateCatNumParams = createAlternateCatNumParams;
/**
 * AlternateCatNumParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AlternateCatNumParamsField = /** @class */ (function (_super) {
    __extends(AlternateCatNumParamsField, _super);
    function AlternateCatNumParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AlternateCatNumParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[AlternateCatNumParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new v4_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[AlternateCatNumParams.substitute]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.substitute = new v4_1.ComplexTypeStringPropertyField('Substitute', _this, 'Edm.String');
        return _this;
    }
    return AlternateCatNumParamsField;
}(v4_1.ComplexTypeField));
exports.AlternateCatNumParamsField = AlternateCatNumParamsField;
var AlternateCatNumParams;
(function (AlternateCatNumParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            CardCode: function (cardCode) { return ({ cardCode: v4_1.edmToTs(cardCode, 'Edm.String') }); },
            Substitute: function (substitute) { return ({ substitute: v4_1.edmToTs(substitute, 'Edm.String') }); }
        });
    }
    AlternateCatNumParams.build = build;
})(AlternateCatNumParams = exports.AlternateCatNumParams || (exports.AlternateCatNumParams = {}));
//# sourceMappingURL=AlternateCatNumParams.js.map