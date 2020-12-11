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
exports.PmActivityData = exports.PmActivityDataField = exports.createPmActivityData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmActivityData.build]] instead.
 */
function createPmActivityData(json) {
    return PmActivityData.build(json);
}
exports.createPmActivityData = createPmActivityData;
/**
 * PmActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmActivityDataField = /** @class */ (function (_super) {
    __extends(PmActivityDataField, _super);
    /**
     * Creates an instance of PmActivityDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmActivityDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmActivityData) || this;
        /**
         * Representation of the [[PmActivityData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmActivityData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmActivityData.activityId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityId = new core_1.ComplexTypeNumberPropertyField('ActivityID', _this, 'Edm.Int32');
        return _this;
    }
    return PmActivityDataField;
}(core_1.ComplexTypeField));
exports.PmActivityDataField = PmActivityDataField;
var PmActivityData;
(function (PmActivityData) {
    /**
     * Metadata information on all properties of the `PmActivityData` complex type.
     */
    PmActivityData._propertyMetadata = [{
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ActivityID',
            name: 'activityId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmActivityData);
    }
    PmActivityData.build = build;
})(PmActivityData = exports.PmActivityData || (exports.PmActivityData = {}));
//# sourceMappingURL=PmActivityData.js.map