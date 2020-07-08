/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createBpAddress(json: any): BpAddress {
  return BpAddress.build(json);
}

/**
 * BpAddressField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpAddressField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BpAddress.addressName]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressName', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.street]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  street: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Street', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.block]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  block: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Block', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  zipCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ZipCode', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.city]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  city: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('City', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.county]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  county: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('County', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.country]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  country: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Country', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.state]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  state: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('State', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.federalTaxId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  federalTaxId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('FederalTaxID', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.taxCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxCode', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.buildingFloorRoom]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  buildingFloorRoom: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BuildingFloorRoom', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.addressName2]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName2: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressName2', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.addressName3]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressName3: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('AddressName3', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.typeOfAddress]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeOfAddress: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TypeOfAddress', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.streetNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  streetNo: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('StreetNo', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.bpCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('BPCode', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.rowNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  rowNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('RowNum', this, 'Edm.Int32');
  /**
   * Representation of the [[BpAddress.globalLocationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  globalLocationNumber: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GlobalLocationNumber', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.nationality]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nationality: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Nationality', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.taxOffice]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxOffice: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('TaxOffice', this, 'Edm.String');
  /**
   * Representation of the [[BpAddress.gstin]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gstin: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('GSTIN', this, 'Edm.String');
}

export namespace BpAddress {
  export function build(json: { [keys: string]: FieldType }): BpAddress {
    return createComplexType(json, {
      AddressName: (addressName: string) => ({ addressName: edmToTs(addressName, 'Edm.String') }),
      Street: (street: string) => ({ street: edmToTs(street, 'Edm.String') }),
      Block: (block: string) => ({ block: edmToTs(block, 'Edm.String') }),
      ZipCode: (zipCode: string) => ({ zipCode: edmToTs(zipCode, 'Edm.String') }),
      City: (city: string) => ({ city: edmToTs(city, 'Edm.String') }),
      County: (county: string) => ({ county: edmToTs(county, 'Edm.String') }),
      Country: (country: string) => ({ country: edmToTs(country, 'Edm.String') }),
      State: (state: string) => ({ state: edmToTs(state, 'Edm.String') }),
      FederalTaxID: (federalTaxId: string) => ({ federalTaxId: edmToTs(federalTaxId, 'Edm.String') }),
      TaxCode: (taxCode: string) => ({ taxCode: edmToTs(taxCode, 'Edm.String') }),
      BuildingFloorRoom: (buildingFloorRoom: string) => ({ buildingFloorRoom: edmToTs(buildingFloorRoom, 'Edm.String') }),
      AddressName2: (addressName2: string) => ({ addressName2: edmToTs(addressName2, 'Edm.String') }),
      AddressName3: (addressName3: string) => ({ addressName3: edmToTs(addressName3, 'Edm.String') }),
      TypeOfAddress: (typeOfAddress: string) => ({ typeOfAddress: edmToTs(typeOfAddress, 'Edm.String') }),
      StreetNo: (streetNo: string) => ({ streetNo: edmToTs(streetNo, 'Edm.String') }),
      BPCode: (bpCode: string) => ({ bpCode: edmToTs(bpCode, 'Edm.String') }),
      RowNum: (rowNum: number) => ({ rowNum: edmToTs(rowNum, 'Edm.Int32') }),
      GlobalLocationNumber: (globalLocationNumber: string) => ({ globalLocationNumber: edmToTs(globalLocationNumber, 'Edm.String') }),
      Nationality: (nationality: string) => ({ nationality: edmToTs(nationality, 'Edm.String') }),
      TaxOffice: (taxOffice: string) => ({ taxOffice: edmToTs(taxOffice, 'Edm.String') }),
      GSTIN: (gstin: string) => ({ gstin: edmToTs(gstin, 'Edm.String') })
    });
  }
}
