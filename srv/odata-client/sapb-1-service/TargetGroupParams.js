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
exports.TargetGroupParams = exports.TargetGroupParamsField = exports.createTargetGroupParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TargetGroupParams.build]] instead.
 */
function createTargetGroupParams(json) {
    return TargetGroupParams.build(json);
}
exports.createTargetGroupParams = createTargetGroupParams;
/**
 * TargetGroupParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TargetGroupParamsField = /** @class */ (function (_super) {
    __extends(TargetGroupParamsField, _super);
    /**
     * Creates an instance of TargetGroupParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TargetGroupParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TargetGroupParams) || this;
        /**
         * Representation of the [[TargetGroupParams.targetGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetGroupCode = new core_1.ComplexTypeStringPropertyField('TargetGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupParams.targetGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetGroupName = new core_1.ComplexTypeStringPropertyField('TargetGroupName', _this, 'Edm.String');
        return _this;
    }
    return TargetGroupParamsField;
}(core_1.ComplexTypeField));
exports.TargetGroupParamsField = TargetGroupParamsField;
var TargetGroupParams;
(function (TargetGroupParams) {
    /**
     * Metadata information on all properties of the `TargetGroupParams` complex type.
     */
    TargetGroupParams._propertyMetadata = [{
            originalName: 'TargetGroupCode',
            name: 'targetGroupCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TargetGroupName',
            name: 'targetGroupName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TargetGroupParams);
    }
    TargetGroupParams.build = build;
})(TargetGroupParams = exports.TargetGroupParams || (exports.TargetGroupParams = {}));
//# sourceMappingURL=TargetGroupParams.js.map