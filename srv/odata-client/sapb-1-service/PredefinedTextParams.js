"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredefinedTextParams = exports.PredefinedTextParamsField = exports.createPredefinedTextParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PredefinedTextParams.build]] instead.
 */
function createPredefinedTextParams(json) {
    return PredefinedTextParams.build(json);
}
exports.createPredefinedTextParams = createPredefinedTextParams;
/**
 * PredefinedTextParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PredefinedTextParamsField = /** @class */ (function (_super) {
    __extends(PredefinedTextParamsField, _super);
    /**
     * Creates an instance of PredefinedTextParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PredefinedTextParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PredefinedTextParams) || this;
        /**
         * Representation of the [[PredefinedTextParams.numerator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numerator = new core_1.ComplexTypeNumberPropertyField('Numerator', _this, 'Edm.Int32');
        /**
         * Representation of the [[PredefinedTextParams.textCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.textCode = new core_1.ComplexTypeStringPropertyField('TextCode', _this, 'Edm.String');
        return _this;
    }
    return PredefinedTextParamsField;
}(core_1.ComplexTypeField));
exports.PredefinedTextParamsField = PredefinedTextParamsField;
var PredefinedTextParams;
(function (PredefinedTextParams) {
    /**
     * Metadata information on all properties of the `PredefinedTextParams` complex type.
     */
    PredefinedTextParams._propertyMetadata = [{
            originalName: 'Numerator',
            name: 'numerator',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TextCode',
            name: 'textCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PredefinedTextParams);
    }
    PredefinedTextParams.build = build;
})(PredefinedTextParams = exports.PredefinedTextParams || (exports.PredefinedTextParams = {}));
//# sourceMappingURL=PredefinedTextParams.js.map