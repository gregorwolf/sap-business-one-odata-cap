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
exports.BlobTableKeySegment = exports.BlobTableKeySegmentField = exports.createBlobTableKeySegment = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BlobTableKeySegment.build]] instead.
 */
function createBlobTableKeySegment(json) {
    return BlobTableKeySegment.build(json);
}
exports.createBlobTableKeySegment = createBlobTableKeySegment;
/**
 * BlobTableKeySegmentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlobTableKeySegmentField = /** @class */ (function (_super) {
    __extends(BlobTableKeySegmentField, _super);
    /**
     * Creates an instance of BlobTableKeySegmentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BlobTableKeySegmentField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BlobTableKeySegment) || this;
        /**
         * Representation of the [[BlobTableKeySegment.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[BlobTableKeySegment.value]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.value = new core_1.ComplexTypeStringPropertyField('Value', _this, 'Edm.String');
        return _this;
    }
    return BlobTableKeySegmentField;
}(core_1.ComplexTypeField));
exports.BlobTableKeySegmentField = BlobTableKeySegmentField;
var BlobTableKeySegment;
(function (BlobTableKeySegment) {
    /**
     * Metadata information on all properties of the `BlobTableKeySegment` complex type.
     */
    BlobTableKeySegment._propertyMetadata = [{
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Value',
            name: 'value',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BlobTableKeySegment);
    }
    BlobTableKeySegment.build = build;
})(BlobTableKeySegment = exports.BlobTableKeySegment || (exports.BlobTableKeySegment = {}));
//# sourceMappingURL=BlobTableKeySegment.js.map