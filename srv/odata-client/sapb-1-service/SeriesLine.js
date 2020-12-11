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
exports.SeriesLine = exports.SeriesLineField = exports.createSeriesLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SeriesLine.build]] instead.
 */
function createSeriesLine(json) {
    return SeriesLine.build(json);
}
exports.createSeriesLine = createSeriesLine;
/**
 * SeriesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SeriesLineField = /** @class */ (function (_super) {
    __extends(SeriesLineField, _super);
    /**
     * Creates an instance of SeriesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SeriesLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SeriesLine) || this;
        /**
         * Representation of the [[SeriesLine.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new core_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[SeriesLine.prefix]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.prefix = new core_1.ComplexTypeStringPropertyField('Prefix', _this, 'Edm.String');
        /**
         * Representation of the [[SeriesLine.firstNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstNum = new core_1.ComplexTypeNumberPropertyField('FirstNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[SeriesLine.nextNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nextNum = new core_1.ComplexTypeNumberPropertyField('NextNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[SeriesLine.lastNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastNum = new core_1.ComplexTypeNumberPropertyField('LastNum', _this, 'Edm.Int32');
        return _this;
    }
    return SeriesLineField;
}(core_1.ComplexTypeField));
exports.SeriesLineField = SeriesLineField;
var SeriesLine;
(function (SeriesLine) {
    /**
     * Metadata information on all properties of the `SeriesLine` complex type.
     */
    SeriesLine._propertyMetadata = [{
            originalName: 'Series',
            name: 'series',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Prefix',
            name: 'prefix',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FirstNum',
            name: 'firstNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'NextNum',
            name: 'nextNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LastNum',
            name: 'lastNum',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SeriesLine);
    }
    SeriesLine.build = build;
})(SeriesLine = exports.SeriesLine || (exports.SeriesLine = {}));
//# sourceMappingURL=SeriesLine.js.map