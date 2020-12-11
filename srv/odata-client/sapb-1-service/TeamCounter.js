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
exports.TeamCounter = exports.TeamCounterField = exports.createTeamCounter = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TeamCounter.build]] instead.
 */
function createTeamCounter(json) {
    return TeamCounter.build(json);
}
exports.createTeamCounter = createTeamCounter;
/**
 * TeamCounterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TeamCounterField = /** @class */ (function (_super) {
    __extends(TeamCounterField, _super);
    /**
     * Creates an instance of TeamCounterField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TeamCounterField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TeamCounter) || this;
        /**
         * Representation of the [[TeamCounter.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[TeamCounter.counterId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterId = new core_1.ComplexTypeNumberPropertyField('CounterID', _this, 'Edm.Int32');
        /**
         * Representation of the [[TeamCounter.counterType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterType = new core_1.ComplexTypeEnumPropertyField('CounterType', _this);
        /**
         * Representation of the [[TeamCounter.counterName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterName = new core_1.ComplexTypeStringPropertyField('CounterName', _this, 'Edm.String');
        /**
         * Representation of the [[TeamCounter.counterNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterNumber = new core_1.ComplexTypeNumberPropertyField('CounterNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TeamCounter.counterVisualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.counterVisualOrder = new core_1.ComplexTypeNumberPropertyField('CounterVisualOrder', _this, 'Edm.Int32');
        return _this;
    }
    return TeamCounterField;
}(core_1.ComplexTypeField));
exports.TeamCounterField = TeamCounterField;
var TeamCounter;
(function (TeamCounter) {
    /**
     * Metadata information on all properties of the `TeamCounter` complex type.
     */
    TeamCounter._propertyMetadata = [{
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CounterID',
            name: 'counterId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CounterType',
            name: 'counterType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CounterName',
            name: 'counterName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CounterNumber',
            name: 'counterNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CounterVisualOrder',
            name: 'counterVisualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TeamCounter);
    }
    TeamCounter.build = build;
})(TeamCounter = exports.TeamCounter || (exports.TeamCounter = {}));
//# sourceMappingURL=TeamCounter.js.map