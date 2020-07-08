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
exports.IndiaSacCodeParams = exports.IndiaSacCodeParamsField = exports.createIndiaSacCodeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[IndiaSacCodeParams.build]] instead.
 */
function createIndiaSacCodeParams(json) {
    return IndiaSacCodeParams.build(json);
}
exports.createIndiaSacCodeParams = createIndiaSacCodeParams;
/**
 * IndiaSacCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var IndiaSacCodeParamsField = /** @class */ (function (_super) {
    __extends(IndiaSacCodeParamsField, _super);
    function IndiaSacCodeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[IndiaSacCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[IndiaSacCodeParams.serviceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCode = new v4_1.ComplexTypeStringPropertyField('ServiceCode', _this, 'Edm.String');
        return _this;
    }
    return IndiaSacCodeParamsField;
}(v4_1.ComplexTypeField));
exports.IndiaSacCodeParamsField = IndiaSacCodeParamsField;
var IndiaSacCodeParams;
(function (IndiaSacCodeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            ServiceCode: function (serviceCode) { return ({ serviceCode: v4_1.edmToTs(serviceCode, 'Edm.String') }); }
        });
    }
    IndiaSacCodeParams.build = build;
})(IndiaSacCodeParams = exports.IndiaSacCodeParams || (exports.IndiaSacCodeParams = {}));
//# sourceMappingURL=IndiaSacCodeParams.js.map