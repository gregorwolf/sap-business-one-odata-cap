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
exports.Attachments2Line = exports.Attachments2LineField = exports.createAttachments2Line = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function Attachments2LineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[Attachments2Line.sourcePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourcePath = new v4_1.ComplexTypeStringPropertyField('SourcePath', _this, 'Edm.String');
        /**
         * Representation of the [[Attachments2Line.fileName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileName = new v4_1.ComplexTypeStringPropertyField('FileName', _this, 'Edm.String');
        /**
         * Representation of the [[Attachments2Line.fileExtension]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileExtension = new v4_1.ComplexTypeStringPropertyField('FileExtension', _this, 'Edm.String');
        /**
         * Representation of the [[Attachments2Line.attachmentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachmentDate = new v4_1.ComplexTypeDatePropertyField('AttachmentDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return Attachments2LineField;
}(v4_1.ComplexTypeField));
exports.Attachments2LineField = Attachments2LineField;
var Attachments2Line;
(function (Attachments2Line) {
    function build(json) {
        return v4_1.createComplexType(json, {
            SourcePath: function (sourcePath) { return ({ sourcePath: v4_1.edmToTs(sourcePath, 'Edm.String') }); },
            FileName: function (fileName) { return ({ fileName: v4_1.edmToTs(fileName, 'Edm.String') }); },
            FileExtension: function (fileExtension) { return ({ fileExtension: v4_1.edmToTs(fileExtension, 'Edm.String') }); },
            AttachmentDate: function (attachmentDate) { return ({ attachmentDate: v4_1.edmToTs(attachmentDate, 'Edm.DateTimeOffset') }); }
        });
    }
    Attachments2Line.build = build;
})(Attachments2Line = exports.Attachments2Line || (exports.Attachments2Line = {}));
//# sourceMappingURL=Attachments2Line.js.map