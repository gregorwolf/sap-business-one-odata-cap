import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * AddressExtension
 */
export interface AddressExtension {
    /**
     * Ship To Street.
     * @nullable
     */
    shipToStreet?: string;
    /**
     * Ship To Street No.
     * @nullable
     */
    shipToStreetNo?: string;
    /**
     * Ship To Block.
     * @nullable
     */
    shipToBlock?: string;
    /**
     * Ship To Building.
     * @nullable
     */
    shipToBuilding?: string;
    /**
     * Ship To City.
     * @nullable
     */
    shipToCity?: string;
    /**
     * Ship To Zip Code.
     * @nullable
     */
    shipToZipCode?: string;
    /**
     * Ship To County.
     * @nullable
     */
    shipToCounty?: string;
    /**
     * Ship To State.
     * @nullable
     */
    shipToState?: string;
    /**
     * Ship To Country.
     * @nullable
     */
    shipToCountry?: string;
    /**
     * Ship To Address Type.
     * @nullable
     */
    shipToAddressType?: string;
    /**
     * Bill To Street.
     * @nullable
     */
    billToStreet?: string;
    /**
     * Bill To Street No.
     * @nullable
     */
    billToStreetNo?: string;
    /**
     * Bill To Block.
     * @nullable
     */
    billToBlock?: string;
    /**
     * Bill To Building.
     * @nullable
     */
    billToBuilding?: string;
    /**
     * Bill To City.
     * @nullable
     */
    billToCity?: string;
    /**
     * Bill To Zip Code.
     * @nullable
     */
    billToZipCode?: string;
    /**
     * Bill To County.
     * @nullable
     */
    billToCounty?: string;
    /**
     * Bill To State.
     * @nullable
     */
    billToState?: string;
    /**
     * Bill To Country.
     * @nullable
     */
    billToCountry?: string;
    /**
     * Bill To Address Type.
     * @nullable
     */
    billToAddressType?: string;
    /**
     * Ship To Global Location Number.
     * @nullable
     */
    shipToGlobalLocationNumber?: string;
    /**
     * Bill To Global Location Number.
     * @nullable
     */
    billToGlobalLocationNumber?: string;
    /**
     * Ship To Address 2.
     * @nullable
     */
    shipToAddress2?: string;
    /**
     * Ship To Address 3.
     * @nullable
     */
    shipToAddress3?: string;
    /**
     * Bill To Address 2.
     * @nullable
     */
    billToAddress2?: string;
    /**
     * Bill To Address 3.
     * @nullable
     */
    billToAddress3?: string;
    /**
     * Place Of Supply.
     * @nullable
     */
    placeOfSupply?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[AddressExtension.build]] instead.
 */
export declare function createAddressExtension(json: any): AddressExtension;
/**
 * AddressExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class AddressExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[AddressExtension.shipToStreet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToStreet: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToStreetNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToStreetNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToBlock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToBlock: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToBuilding]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToBuilding: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToCity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCity: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToZipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToCounty]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCounty: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToState: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToAddressType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToAddressType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToStreet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToStreet: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToStreetNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToStreetNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToBlock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToBlock: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToBuilding]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToBuilding: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToCity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToCity: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToZipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToCounty]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToCounty: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToState: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToAddressType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToAddressType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToGlobalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToGlobalLocationNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToGlobalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToGlobalLocationNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToAddress2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.shipToAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToAddress3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToAddress2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.billToAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToAddress3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[AddressExtension.placeOfSupply]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    placeOfSupply: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace AddressExtension {
    function build(json: {
        [keys: string]: FieldType;
    }): AddressExtension;
}
//# sourceMappingURL=AddressExtension.d.ts.map