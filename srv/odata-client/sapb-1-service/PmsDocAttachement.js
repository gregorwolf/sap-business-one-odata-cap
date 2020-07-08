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
exports.PmsDocAttachement = exports.PmsDocAttachementField = exports.createPmsDocAttachement = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmsDocAttachement.build]] instead.
 */
function createPmsDocAttachement(json) {
    return PmsDocAttachement.build(json);
}
exports.createPmsDocAttachement = createPmsDocAttachement;
/**
 * PmsDocAttachementField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmsDocAttachementField = /** @class */ (function (_super) {
    __extends(PmsDocAttachementField, _super);
    function PmsDocAttachementField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmsDocAttachement.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocAttachement.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsDocAttachement.sourcePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourcePath = new v4_1.ComplexTypeStringPropertyField('SourcePath', _this, 'Edm.String');
        /**
         * Representation of the [[PmsDocAttachement.fileName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileName = new v4_1.ComplexTypeStringPropertyField('FileName', _this, 'Edm.String');
        /**
         * Representation of the [[PmsDocAttachement.fileExtension]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileExtension = new v4_1.ComplexTypeStringPropertyField('FileExtension', _this, 'Edm.String');
        /**
         * Representation of the [[PmsDocAttachement.attachementDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachementDate = new v4_1.ComplexTypeDatePropertyField('AttachementDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return PmsDocAttachementField;
}(v4_1.ComplexTypeField));
exports.PmsDocAttachementField = PmsDocAttachementField;
var PmsDocAttachement;
(function (PmsDocAttachement) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            LineID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            SourcePath: function (sourcePath) { return ({ sourcePath: v4_1.edmToTs(sourcePath, 'Edm.String') }); },
            FileName: function (fileName) { return ({ fileName: v4_1.edmToTs(fileName, 'Edm.String') }); },
            FileExtension: function (fileExtension) { return ({ fileExtension: v4_1.edmToTs(fileExtension, 'Edm.String') }); },
            AttachementDate: function (attachementDate) { return ({ attachementDate: v4_1.edmToTs(attachementDate, 'Edm.DateTimeOffset') }); }
        });
    }
    PmsDocAttachement.build = build;
})(PmsDocAttachement = exports.PmsDocAttachement || (exports.PmsDocAttachement = {}));
//# sourceMappingURL=PmsDocAttachement.js.map