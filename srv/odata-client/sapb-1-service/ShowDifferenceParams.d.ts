import { BoChangeLogEnum } from './BoChangeLogEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ShowDifferenceParams
 */
export interface ShowDifferenceParams {
    /**
     * Primary Key.
     * @nullable
     */
    primaryKey?: string;
    /**
     * Udo Object Code.
     * @nullable
     */
    udoObjectCode?: string;
    /**
     * Object.
     * @nullable
     */
    object?: BoChangeLogEnum;
    /**
     * Log Instance 2.
     * @nullable
     */
    logInstance2?: number;
    /**
     * Log Instance.
     * @nullable
     */
    logInstance?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[ShowDifferenceParams.build]] instead.
 */
export declare function createShowDifferenceParams(json: any): ShowDifferenceParams;
/**
 * ShowDifferenceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ShowDifferenceParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ShowDifferenceParams> {
    /**
     * Representation of the [[ShowDifferenceParams.primaryKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    primaryKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ShowDifferenceParams.udoObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udoObjectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ShowDifferenceParams.object]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    object: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ShowDifferenceParams.logInstance2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logInstance2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ShowDifferenceParams.logInstance]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logInstance: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of ShowDifferenceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ShowDifferenceParams {
    /**
     * Metadata information on all properties of the `ShowDifferenceParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ShowDifferenceParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ShowDifferenceParams;
}
//# sourceMappingURL=ShowDifferenceParams.d.ts.map