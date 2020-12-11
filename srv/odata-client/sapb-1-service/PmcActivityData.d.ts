import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * PmcActivityData
 */
export interface PmcActivityData {
    /**
     * Activity Id.
     * @nullable
     */
    activityId?: number;
    /**
     * Activity Type.
     * @nullable
     */
    activityType?: string;
    /**
     * Labor Item.
     * @nullable
     */
    laborItem?: string;
    /**
     * Is Chargeable.
     * @nullable
     */
    isChargeable?: BoYesNoEnum;
    /**
     * Is Absence.
     * @nullable
     */
    isAbsence?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[PmcActivityData.build]] instead.
 */
export declare function createPmcActivityData(json: any): PmcActivityData;
/**
 * PmcActivityDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class PmcActivityDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmcActivityData> {
    /**
     * Representation of the [[PmcActivityData.activityId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[PmcActivityData.activityType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    activityType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmcActivityData.laborItem]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    laborItem: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[PmcActivityData.isChargeable]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isChargeable: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[PmcActivityData.isAbsence]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isAbsence: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of PmcActivityDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace PmcActivityData {
    /**
     * Metadata information on all properties of the `PmcActivityData` complex type.
     */
    const _propertyMetadata: PropertyMetadata<PmcActivityData>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): PmcActivityData;
}
//# sourceMappingURL=PmcActivityData.d.ts.map