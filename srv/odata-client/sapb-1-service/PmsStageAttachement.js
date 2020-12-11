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
exports.PmsStageAttachement = exports.PmsStageAttachementField = exports.createPmsStageAttachement = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmsStageAttachement.build]] instead.
 */
function createPmsStageAttachement(json) {
    return PmsStageAttachement.build(json);
}
exports.createPmsStageAttachement = createPmsStageAttachement;
/**
 * PmsStageAttachementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmsStageAttachementField = /** @class */ (function (_super) {
    __extends(PmsStageAttachementField, _super);
    /**
     * Creates an instance of PmsStageAttachementField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmsStageAttachementField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmsStageAttachement) || this;
        /**
         * Representation of the [[PmsStageAttachement.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageAttachement.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageAttachement.sourcePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourcePath = new core_1.ComplexTypeStringPropertyField('SourcePath', _this, 'Edm.String');
        /**
         * Representation of the [[PmsStageAttachement.fileName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileName = new core_1.ComplexTypeStringPropertyField('FileName', _this, 'Edm.String');
        /**
         * Representation of the [[PmsStageAttachement.fileExtension]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileExtension = new core_1.ComplexTypeStringPropertyField('FileExtension', _this, 'Edm.String');
        /**
         * Representation of the [[PmsStageAttachement.attachementDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachementDate = new core_1.ComplexTypeDatePropertyField('AttachementDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return PmsStageAttachementField;
}(core_1.ComplexTypeField));
exports.PmsStageAttachementField = PmsStageAttachementField;
var PmsStageAttachement;
(function (PmsStageAttachement) {
    /**
     * Metadata information on all properties of the `PmsStageAttachement` complex type.
     */
    PmsStageAttachement._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SourcePath',
            name: 'sourcePath',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FileName',
            name: 'fileName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FileExtension',
            name: 'fileExtension',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AttachementDate',
            name: 'attachementDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmsStageAttachement);
    }
    PmsStageAttachement.build = build;
})(PmsStageAttachement = exports.PmsStageAttachement || (exports.PmsStageAttachement = {}));
//# sourceMappingURL=PmsStageAttachement.js.map