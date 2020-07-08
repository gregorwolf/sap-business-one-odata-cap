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
exports.CampaignResponseTypeParams = exports.CampaignResponseTypeParamsField = exports.createCampaignResponseTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CampaignResponseTypeParams.build]] instead.
 */
function createCampaignResponseTypeParams(json) {
    return CampaignResponseTypeParams.build(json);
}
exports.createCampaignResponseTypeParams = createCampaignResponseTypeParams;
/**
 * CampaignResponseTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CampaignResponseTypeParamsField = /** @class */ (function (_super) {
    __extends(CampaignResponseTypeParamsField, _super);
    function CampaignResponseTypeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CampaignResponseTypeParams.responseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.responseType = new v4_1.ComplexTypeStringPropertyField('ResponseType', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignResponseTypeParams.responseTypeDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.responseTypeDescription = new v4_1.ComplexTypeStringPropertyField('ResponseTypeDescription', _this, 'Edm.String');
        return _this;
    }
    return CampaignResponseTypeParamsField;
}(v4_1.ComplexTypeField));
exports.CampaignResponseTypeParamsField = CampaignResponseTypeParamsField;
var CampaignResponseTypeParams;
(function (CampaignResponseTypeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ResponseType: function (responseType) { return ({ responseType: v4_1.edmToTs(responseType, 'Edm.String') }); },
            ResponseTypeDescription: function (responseTypeDescription) { return ({ responseTypeDescription: v4_1.edmToTs(responseTypeDescription, 'Edm.String') }); }
        });
    }
    CampaignResponseTypeParams.build = build;
})(CampaignResponseTypeParams = exports.CampaignResponseTypeParams || (exports.CampaignResponseTypeParams = {}));
//# sourceMappingURL=CampaignResponseTypeParams.js.map