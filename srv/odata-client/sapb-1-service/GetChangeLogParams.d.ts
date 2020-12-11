import { BoChangeLogEnum } from './BoChangeLogEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * GetChangeLogParams
 */
export interface GetChangeLogParams {
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
}
/**
 * @deprecated Since v1.6.0. Use [[GetChangeLogParams.build]] instead.
 */
export declare function createGetChangeLogParams(json: any): GetChangeLogParams;
/**
 * GetChangeLogParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class GetChangeLogParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, GetChangeLogParams> {
    /**
     * Representation of the [[GetChangeLogParams.primaryKey]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    primaryKey: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GetChangeLogParams.udoObjectCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udoObjectCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[GetChangeLogParams.object]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    object: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of GetChangeLogParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace GetChangeLogParams {
    /**
     * Metadata information on all properties of the `GetChangeLogParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<GetChangeLogParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): GetChangeLogParams;
}
//# sourceMappingURL=GetChangeLogParams.d.ts.map