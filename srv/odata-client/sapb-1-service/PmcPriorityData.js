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
exports.PmcPriorityData = exports.PmcPriorityDataField = exports.createPmcPriorityData = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmcPriorityData.build]] instead.
 */
function createPmcPriorityData(json) {
    return PmcPriorityData.build(json);
}
exports.createPmcPriorityData = createPmcPriorityData;
/**
 * PmcPriorityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmcPriorityDataField = /** @class */ (function (_super) {
    __extends(PmcPriorityDataField, _super);
    /**
     * Creates an instance of PmcPriorityDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmcPriorityDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmcPriorityData) || this;
        /**
         * Representation of the [[PmcPriorityData.priorityId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priorityId = new core_1.ComplexTypeNumberPropertyField('PriorityID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmcPriorityData.priorityName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priorityName = new core_1.ComplexTypeStringPropertyField('PriorityName', _this, 'Edm.String');
        return _this;
    }
    return PmcPriorityDataField;
}(core_1.ComplexTypeField));
exports.PmcPriorityDataField = PmcPriorityDataField;
var PmcPriorityData;
(function (PmcPriorityData) {
    /**
     * Metadata information on all properties of the `PmcPriorityData` complex type.
     */
    PmcPriorityData._propertyMetadata = [{
            originalName: 'PriorityID',
            name: 'priorityId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PriorityName',
            name: 'priorityName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmcPriorityData);
    }
    PmcPriorityData.build = build;
})(PmcPriorityData = exports.PmcPriorityData || (exports.PmcPriorityData = {}));
//# sourceMappingURL=PmcPriorityData.js.map