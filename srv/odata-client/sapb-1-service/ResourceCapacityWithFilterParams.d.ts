import { Moment } from 'moment';
import { ResourceCapacityTypeEnum } from './ResourceCapacityTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ResourceCapacityWithFilterParams
 */
export interface ResourceCapacityWithFilterParams {
    /**
     * Code.
     * @nullable
     */
    code?: string;
    /**
     * Warehouse.
     * @nullable
     */
    warehouse?: string;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Type.
     * @nullable
     */
    type?: ResourceCapacityTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityWithFilterParams.build]] instead.
 */
export declare function createResourceCapacityWithFilterParams(json: any): ResourceCapacityWithFilterParams;
/**
 * ResourceCapacityWithFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ResourceCapacityWithFilterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ResourceCapacityWithFilterParams> {
    /**
     * Representation of the [[ResourceCapacityWithFilterParams.code]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    code: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityWithFilterParams.warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    warehouse: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityWithFilterParams.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ResourceCapacityWithFilterParams.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ResourceCapacityWithFilterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ResourceCapacityWithFilterParams {
    /**
     * Metadata information on all properties of the `ResourceCapacityWithFilterParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ResourceCapacityWithFilterParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ResourceCapacityWithFilterParams;
}
//# sourceMappingURL=ResourceCapacityWithFilterParams.d.ts.map