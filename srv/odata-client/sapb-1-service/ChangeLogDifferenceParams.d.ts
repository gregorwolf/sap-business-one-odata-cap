import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
export declare class ChangeLogDifferenceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ChangeLogDifferenceParams> {
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
    /**
     * Creates an instance of ChangeLogDifferenceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ChangeLogDifferenceParams {
    /**
     * Metadata information on all properties of the `ChangeLogDifferenceParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ChangeLogDifferenceParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ChangeLogDifferenceParams;
}
//# sourceMappingURL=ChangeLogDifferenceParams.d.ts.map