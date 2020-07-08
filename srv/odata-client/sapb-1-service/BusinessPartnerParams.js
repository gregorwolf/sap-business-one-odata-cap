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
exports.BusinessPartnerParams = exports.BusinessPartnerParamsField = exports.createBusinessPartnerParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BusinessPartnerParams.build]] instead.
 */
function createBusinessPartnerParams(json) {
    return BusinessPartnerParams.build(json);
}
exports.createBusinessPartnerParams = createBusinessPartnerParams;
/**
 * BusinessPartnerParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BusinessPartnerParamsField = /** @class */ (function (_super) {
    __extends(BusinessPartnerParamsField, _super);
    function BusinessPartnerParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BusinessPartnerParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new v4_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        return _this;
    }
    return BusinessPartnerParamsField;
}(v4_1.ComplexTypeField));
exports.BusinessPartnerParamsField = BusinessPartnerParamsField;
var BusinessPartnerParams;
(function (BusinessPartnerParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CardCode: function (cardCode) { return ({ cardCode: v4_1.edmToTs(cardCode, 'Edm.String') }); }
        });
    }
    BusinessPartnerParams.build = build;
})(BusinessPartnerParams = exports.BusinessPartnerParams || (exports.BusinessPartnerParams = {}));
//# sourceMappingURL=BusinessPartnerParams.js.map