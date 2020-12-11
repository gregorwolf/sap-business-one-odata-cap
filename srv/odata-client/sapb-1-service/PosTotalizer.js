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
exports.PosTotalizer = exports.PosTotalizerField = exports.createPosTotalizer = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PosTotalizer.build]] instead.
 */
function createPosTotalizer(json) {
    return PosTotalizer.build(json);
}
exports.createPosTotalizer = createPosTotalizer;
/**
 * PosTotalizerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PosTotalizerField = /** @class */ (function (_super) {
    __extends(PosTotalizerField, _super);
    /**
     * Creates an instance of PosTotalizerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PosTotalizerField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PosTotalizer) || this;
        /**
         * Representation of the [[PosTotalizer.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PosTotalizer.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[PosTotalizer.number]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.number = new core_1.ComplexTypeNumberPropertyField('Number', _this, 'Edm.Int32');
        /**
         * Representation of the [[PosTotalizer.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new core_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[PosTotalizer.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        return _this;
    }
    return PosTotalizerField;
}(core_1.ComplexTypeField));
exports.PosTotalizerField = PosTotalizerField;
var PosTotalizer;
(function (PosTotalizer) {
    /**
     * Metadata information on all properties of the `PosTotalizer` complex type.
     */
    PosTotalizer._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Number',
            name: 'number',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Total',
            name: 'total',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PosTotalizer);
    }
    PosTotalizer.build = build;
})(PosTotalizer = exports.PosTotalizer || (exports.PosTotalizer = {}));
//# sourceMappingURL=PosTotalizer.js.map