import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * ServiceCallBpAddressComponent
 */
export interface ServiceCallBpAddressComponent {
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
     * Ship To State.
     * @nullable
     */
    shipToState?: string;
    /**
     * Ship To County.
     * @nullable
     */
    shipToCounty?: string;
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
     * Ship To Global Location Number.
     * @nullable
     */
    shipToGlobalLocationNumber?: string;
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
     * Bill To State.
     * @nullable
     */
    billToState?: string;
    /**
     * Bill To County.
     * @nullable
     */
    billToCounty?: string;
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
     * Bill To Global Location Number.
     * @nullable
     */
    billToGlobalLocationNumber?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallBpAddressComponent.build]] instead.
 */
export declare function createServiceCallBpAddressComponent(json: any): ServiceCallBpAddressComponent;
/**
 * ServiceCallBpAddressComponentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ServiceCallBpAddressComponentField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToStreet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToStreet: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToStreetNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToStreetNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToBlock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToBlock: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToBuilding]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToBuilding: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToCity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCity: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToZipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToState: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToCounty]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCounty: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToAddressType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToAddressType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToAddress2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToAddress3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.shipToGlobalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipToGlobalLocationNumber: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToStreet]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToStreet: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToStreetNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToStreetNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToBlock]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToBlock: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToBuilding]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToBuilding: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToCity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToCity: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToZipCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToState: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToCounty]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToCounty: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToCountry]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToCountry: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToAddressType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToAddressType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToAddress2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToAddress3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ServiceCallBpAddressComponent.billToGlobalLocationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billToGlobalLocationNumber: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace ServiceCallBpAddressComponent {
    function build(json: {
        [keys: string]: FieldType;
    }): ServiceCallBpAddressComponent;
}
//# sourceMappingURL=ServiceCallBpAddressComponent.d.ts.map