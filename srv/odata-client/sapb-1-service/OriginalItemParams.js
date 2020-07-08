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
exports.OriginalItemParams = exports.OriginalItemParamsField = exports.createOriginalItemParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[OriginalItemParams.build]] instead.
 */
function createOriginalItemParams(json) {
    return OriginalItemParams.build(json);
}
exports.createOriginalItemParams = createOriginalItemParams;
/**
 * OriginalItemParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var OriginalItemParamsField = /** @class */ (function (_super) {
    __extends(OriginalItemParamsField, _super);
    function OriginalItemParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[OriginalItemParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[OriginalItemParams.itemName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemName = new v4_1.ComplexTypeStringPropertyField('ItemName', _this, 'Edm.String');
        return _this;
    }
    return OriginalItemParamsField;
}(v4_1.ComplexTypeField));
exports.OriginalItemParamsField = OriginalItemParamsField;
var OriginalItemParams;
(function (OriginalItemParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemName: function (itemName) { return ({ itemName: v4_1.edmToTs(itemName, 'Edm.String') }); }
        });
    }
    OriginalItemParams.build = build;
})(OriginalItemParams = exports.OriginalItemParams || (exports.OriginalItemParams = {}));
//# sourceMappingURL=OriginalItemParams.js.map