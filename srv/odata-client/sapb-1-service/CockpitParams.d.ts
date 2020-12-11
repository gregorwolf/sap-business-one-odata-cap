import { BoCockpitTypeEnum } from './BoCockpitTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CockpitParams
 */
export interface CockpitParams {
    /**
     * Abs Entry.
     * @nullable
     */
    absEntry?: number;
    /**
     * Cockpit Type.
     * @nullable
     */
    cockpitType?: BoCockpitTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[CockpitParams.build]] instead.
 */
export declare function createCockpitParams(json: any): CockpitParams;
/**
 * CockpitParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CockpitParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CockpitParams> {
    /**
     * Representation of the [[CockpitParams.absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absEntry: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[CockpitParams.cockpitType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cockpitType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of CockpitParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CockpitParams {
    /**
     * Metadata information on all properties of the `CockpitParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CockpitParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CockpitParams;
}
//# sourceMappingURL=CockpitParams.d.ts.map