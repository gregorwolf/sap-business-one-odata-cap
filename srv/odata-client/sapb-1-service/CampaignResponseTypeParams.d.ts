import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * CampaignResponseTypeParams
 */
export interface CampaignResponseTypeParams {
    /**
     * Response Type.
     * @nullable
     */
    responseType?: string;
    /**
     * Response Type Description.
     * @nullable
     */
    responseTypeDescription?: string;
    /**
     * Is Active.
     * @nullable
     */
    isActive?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[CampaignResponseTypeParams.build]] instead.
 */
export declare function createCampaignResponseTypeParams(json: any): CampaignResponseTypeParams;
/**
 * CampaignResponseTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CampaignResponseTypeParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CampaignResponseTypeParams> {
    /**
     * Representation of the [[CampaignResponseTypeParams.responseType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    responseType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignResponseTypeParams.responseTypeDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    responseTypeDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CampaignResponseTypeParams.isActive]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isActive: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of CampaignResponseTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CampaignResponseTypeParams {
    /**
     * Metadata information on all properties of the `CampaignResponseTypeParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CampaignResponseTypeParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CampaignResponseTypeParams;
}
//# sourceMappingURL=CampaignResponseTypeParams.d.ts.map