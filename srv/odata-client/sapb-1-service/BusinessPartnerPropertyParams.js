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
exports.BusinessPartnerPropertyParams = exports.BusinessPartnerPropertyParamsField = exports.createBusinessPartnerPropertyParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerPropertyParams.build]] instead.
 */
function createBusinessPartnerPropertyParams(json) {
    return BusinessPartnerPropertyParams.build(json);
}
exports.createBusinessPartnerPropertyParams = createBusinessPartnerPropertyParams;
/**
 * BusinessPartnerPropertyParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BusinessPartnerPropertyParamsField = /** @class */ (function (_super) {
    __extends(BusinessPartnerPropertyParamsField, _super);
    function BusinessPartnerPropertyParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BusinessPartnerPropertyParams.propertyCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.propertyCode = new v4_1.ComplexTypeNumberPropertyField('PropertyCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BusinessPartnerPropertyParams.propertyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.propertyName = new v4_1.ComplexTypeStringPropertyField('PropertyName', _this, 'Edm.String');
        return _this;
    }
    return BusinessPartnerPropertyParamsField;
}(v4_1.ComplexTypeField));
exports.BusinessPartnerPropertyParamsField = BusinessPartnerPropertyParamsField;
var BusinessPartnerPropertyParams;
(function (BusinessPartnerPropertyParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PropertyCode: function (propertyCode) { return ({ propertyCode: v4_1.edmToTs(propertyCode, 'Edm.Int32') }); },
            PropertyName: function (propertyName) { return ({ propertyName: v4_1.edmToTs(propertyName, 'Edm.String') }); }
        });
    }
    BusinessPartnerPropertyParams.build = build;
})(BusinessPartnerPropertyParams = exports.BusinessPartnerPropertyParams || (exports.BusinessPartnerPropertyParams = {}));
//# sourceMappingURL=BusinessPartnerPropertyParams.js.map