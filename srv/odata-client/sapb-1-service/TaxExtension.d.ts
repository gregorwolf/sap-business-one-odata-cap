import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxExtension
 */
export interface TaxExtension {
    /**
     * Tax Id 0.
     * @nullable
     */
    taxId0?: string;
    /**
     * Tax Id 1.
     * @nullable
     */
    taxId1?: string;
    /**
     * Tax Id 2.
     * @nullable
     */
    taxId2?: string;
    /**
     * Tax Id 3.
     * @nullable
     */
    taxId3?: string;
    /**
     * Tax Id 4.
     * @nullable
     */
    taxId4?: string;
    /**
     * Tax Id 5.
     * @nullable
     */
    taxId5?: string;
    /**
     * Tax Id 6.
     * @nullable
     */
    taxId6?: string;
    /**
     * Tax Id 7.
     * @nullable
     */
    taxId7?: string;
    /**
     * Tax Id 8.
     * @nullable
     */
    taxId8?: string;
    /**
     * Tax Id 9.
     * @nullable
     */
    taxId9?: string;
    /**
     * State.
     * @nullable
     */
    state?: string;
    /**
     * County.
     * @nullable
     */
    county?: string;
    /**
     * Incoterms.
     * @nullable
     */
    incoterms?: string;
    /**
     * Vehicle.
     * @nullable
     */
    vehicle?: string;
    /**
     * Vehicle State.
     * @nullable
     */
    vehicleState?: string;
    /**
     * Nf Ref.
     * @nullable
     */
    nfRef?: string;
    /**
     * Carrier.
     * @nullable
     */
    carrier?: string;
    /**
     * Pack Quantity.
     * @nullable
     */
    packQuantity?: number;
    /**
     * Pack Description.
     * @nullable
     */
    packDescription?: string;
    /**
     * Brand.
     * @nullable
     */
    brand?: string;
    /**
     * Ship Unit No.
     * @nullable
     */
    shipUnitNo?: number;
    /**
     * Net Weight.
     * @nullable
     */
    netWeight?: number;
    /**
     * Gross Weight.
     * @nullable
     */
    grossWeight?: number;
    /**
     * Street S.
     * @nullable
     */
    streetS?: string;
    /**
     * Block S.
     * @nullable
     */
    blockS?: string;
    /**
     * Building S.
     * @nullable
     */
    buildingS?: string;
    /**
     * City S.
     * @nullable
     */
    cityS?: string;
    /**
     * Zip Code S.
     * @nullable
     */
    zipCodeS?: string;
    /**
     * County S.
     * @nullable
     */
    countyS?: string;
    /**
     * State S.
     * @nullable
     */
    stateS?: string;
    /**
     * Country S.
     * @nullable
     */
    countryS?: string;
    /**
     * Street B.
     * @nullable
     */
    streetB?: string;
    /**
     * Block B.
     * @nullable
     */
    blockB?: string;
    /**
     * Building B.
     * @nullable
     */
    buildingB?: string;
    /**
     * City B.
     * @nullable
     */
    cityB?: string;
    /**
     * Zip Code B.
     * @nullable
     */
    zipCodeB?: string;
    /**
     * County B.
     * @nullable
     */
    countyB?: string;
    /**
     * State B.
     * @nullable
     */
    stateB?: string;
    /**
     * Country B.
     * @nullable
     */
    countryB?: string;
    /**
     * Main Usage.
     * @nullable
     */
    mainUsage?: number;
    /**
     * Global Location Number S.
     * @nullable
     */
    globalLocationNumberS?: string;
    /**
     * Global Location Number B.
     * @nullable
     */
    globalLocationNumberB?: string;
    /**
     * Tax Id 12.
     * @nullable
     */
    taxId12?: string;
    /**
     * Tax Id 13.
     * @nullable
     */
    taxId13?: string;
    /**
     * Bill Of Entry No.
     * @nullable
     */
    billOfEntryNo?: string;
    /**
     * Bill Of Entry Date.
     * @nullable
     */
    billOfEntryDate?: Moment;
    /**
     * Original Bill Of Entry No.
     * @nullable
     */
    originalBillOfEntryNo?: string;
    /**
     * Original Bill Of Entry Date.
     * @nullable
     */
    originalBillOfEntryDate?: Moment;
    /**
     * Port Code.
     * @nullable
     */
    portCode?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxExtension.build]] instead.
 */
export declare function createTaxExtension(json: any): TaxExtension;
/**
 * TaxExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxExtensionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxExtension.taxId0]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId0: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId5]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId5: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId6]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId6: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId7]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId7: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId8]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId8: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId9]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId9: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.state]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    state: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.county]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    county: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.incoterms]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    incoterms: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.vehicle]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vehicle: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.vehicleState]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    vehicleState: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.nfRef]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    nfRef: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.carrier]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    carrier: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.packQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    packQuantity: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.packDescription]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    packDescription: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.brand]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    brand: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.shipUnitNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    shipUnitNo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.netWeight]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    netWeight: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.grossWeight]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    grossWeight: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.streetS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    streetS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.blockS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.buildingS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    buildingS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.cityS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cityS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.zipCodeS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    zipCodeS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.countyS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countyS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.stateS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stateS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.countryS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countryS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.streetB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    streetB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.blockB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    blockB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.buildingB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    buildingB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.cityB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cityB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.zipCodeB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    zipCodeB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.countyB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countyB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.stateB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stateB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.countryB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    countryB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.mainUsage]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    mainUsage: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.globalLocationNumberS]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    globalLocationNumberS: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.globalLocationNumberB]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    globalLocationNumberB: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId12]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId12: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.taxId13]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxId13: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.billOfEntryNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfEntryNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.billOfEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    billOfEntryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.originalBillOfEntryNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originalBillOfEntryNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.originalBillOfEntryDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    originalBillOfEntryDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TaxExtension.portCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    portCode: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace TaxExtension {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxExtension;
}
//# sourceMappingURL=TaxExtension.d.ts.map