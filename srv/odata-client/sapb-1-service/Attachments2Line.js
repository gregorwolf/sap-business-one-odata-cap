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
exports.Attachments2Line = exports.Attachments2LineField = exports.createAttachments2Line = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[Attachments2Line.build]] instead.
 */
function createAttachments2Line(json) {
    return Attachments2Line.build(json);
}
exports.createAttachments2Line = createAttachments2Line;
/**
 * Attachments2LineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var Attachments2LineField = /** @class */ (function (_super) {
    __extends(Attachments2LineField, _super);
    /**
     * Creates an instance of Attachments2LineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function Attachments2LineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, Attachments2Line) || this;
        /**
         * Representation of the [[Attachments2Line.sourcePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourcePath = new core_1.ComplexTypeStringPropertyField('SourcePath', _this, 'Edm.String');
        /**
         * Representation of the [[Attachments2Line.fileName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileName = new core_1.ComplexTypeStringPropertyField('FileName', _this, 'Edm.String');
        /**
         * Representation of the [[Attachments2Line.fileExtension]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileExtension = new core_1.ComplexTypeStringPropertyField('FileExtension', _this, 'Edm.String');
        /**
         * Representation of the [[Attachments2Line.attachmentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachmentDate = new core_1.ComplexTypeDatePropertyField('AttachmentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[Attachments2Line.userId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userId = new core_1.ComplexTypeEnumPropertyField('UserID', _this);
        /**
         * Representation of the [[Attachments2Line.override]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.override = new core_1.ComplexTypeEnumPropertyField('Override', _this);
        return _this;
    }
    return Attachments2LineField;
}(core_1.ComplexTypeField));
exports.Attachments2LineField = Attachments2LineField;
var Attachments2Line;
(function (Attachments2Line) {
    /**
     * Metadata information on all properties of the `Attachments2Line` complex type.
     */
    Attachments2Line._propertyMetadata = [{
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
            originalName: 'AttachmentDate',
            name: 'attachmentDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'UserID',
            name: 'userId',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Override',
            name: 'override',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, Attachments2Line);
    }
    Attachments2Line.build = build;
})(Attachments2Line = exports.Attachments2Line || (exports.Attachments2Line = {}));
//# sourceMappingURL=Attachments2Line.js.map