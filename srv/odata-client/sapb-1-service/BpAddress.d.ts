import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * BpAddress
 */
export interface BpAddress {
    /**
     * Address Name.
     * @nullable
     */
    addressName?: string;
    /**
     * Street.
     * @nullable
     */
    street?: string;
    /**
     * Block.
     * @nullable
     */
    block?: string;
    /**
     * Zip Code.
     * @nullable
     */
    zipCode?: string;
    /**
     * City.
     * @nullable
     */
    city?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * Country.
     * @nullable
     */
    country?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * Federal Tax Id.
     * @nullable
     */
    federalTaxId?: string;
    /**
     * Tax Code.
     * @nullable
     */
    taxCode?: string;
    /**
     * Building Floor Room.
     * @nullable
     */
    buildingFloorRoom?: string;
    /**
     * Address Name 2.
     * @nullable
     */
    addressName2?: string;
    /**
     * Address Name 3.
     * @nullable
     */
    addressName3?: string;
    /**
     * Type Of Address.
     * @nullable
     */
    typeOfAddress?: string;
    /**
     * Street No.
     * @nullable
     */
    streetNo?: string;
    /**
     * Bp Code.
     * @nullable
     */
    bpCode?: string;
    /**
     * Row Num.
     * @nullable
     */
    rowNum?: number;
    /**
     * Global Location Number.
     * @nullable
     */
    globalLocationNumber?: string;
    /**
     * Nationality.
     * @nullable
     */
    nationality?: string;
    /**
     * Tax Office.
     * @nullable
     */
    taxOffice?: string;
    /**
     * Gstin.
     * @nullable
     */
    gstin?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[BpAddress.build]] instead.
 */
export declare function createBpAddress(json: any): BpAddress;
/**
 * BpAddressField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class BpAddressField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[BpAddress.addressName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressName: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.street]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    street: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.block]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    block: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    zipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.city]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    city: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.county]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    county: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.country]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    country: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.federalTaxId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    federalTaxId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.buildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    buildingFloorRoom: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.addressName2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressName2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.addressName3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    addressName3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.typeOfAddress]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    typeOfAddress: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.streetNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    streetNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.rowNum]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rowNum: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.globalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    globalLocationNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.nationality]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nationality: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.taxOffice]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxOffice: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[BpAddress.gstin]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    gstin: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace BpAddress {
    function build(json: {
        [keys: string]: FieldType;
    }): BpAddress;
}
//# sourceMappingURL=BpAddress.d.ts.map