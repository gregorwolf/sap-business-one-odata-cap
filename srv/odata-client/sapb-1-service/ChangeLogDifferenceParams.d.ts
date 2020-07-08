import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ChangeLogDifferenceParams
 */
export interface ChangeLogDifferenceParams {
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Changed Field.
     * @nullable
     */
    changedField?: string;
    /**
     * Old Value.
     * @nullable
     */
    oldValue?: string;
    /**
     * New Value.
     * @nullable
     */
    newValue?: string;
    /**
     * User Name.
     * @nullable
     */
    userName?: string;
    /**
     * Array Offset.
     * @nullable
     */
    arrayOffset?: number;
    /**
     * Line Number.
     * @nullable
     */
    lineNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ChangeLogDifferenceParams.build]] instead.
 */
export declare function createChangeLogDifferenceParams(json: any): ChangeLogDifferenceParams;
/**
 * ChangeLogDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ChangeLogDifferenceParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ChangeLogDifferenceParams.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogDifferenceParams.changedField]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    changedField: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogDifferenceParams.oldValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    oldValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogDifferenceParams.newValue]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    newValue: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogDifferenceParams.userName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogDifferenceParams.arrayOffset]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    arrayOffset: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ChangeLogDifferenceParams.lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    lineNumber: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ChangeLogDifferenceParams {
    function build(json: {
        [keys: string]: FieldType;
    }): ChangeLogDifferenceParams;
}
//# sourceMappingURL=ChangeLogDifferenceParams.d.ts.map