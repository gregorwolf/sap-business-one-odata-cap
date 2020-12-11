/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoAddressType } from './BoAddressType';
import { BoGstRegnTypeEnum } from './BoGstRegnTypeEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
   * Address Type.
   * @nullable
   */
  addressType?: BoAddressType;
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
  /**
   * Gst Type.
   * @nullable
   */
  gstType?: BoGstRegnTypeEnum;
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
export class BpAddressField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BpAddress> {
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
   * Representation of the [[BpAddress.addressType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addressType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('AddressType', this);
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
  /**
   * Representation of the [[BpAddress.gstType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  gstType: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('GstType', this);

  /**
   * Creates an instance of BpAddressField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BpAddress);
  }
}

export namespace BpAddress {
  /**
   * Metadata information on all properties of the `BpAddress` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpAddress>[] = [{
    originalName: 'AddressName',
    name: 'addressName',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Street',
    name: 'street',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Block',
    name: 'block',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ZipCode',
    name: 'zipCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'City',
    name: 'city',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'County',
    name: 'county',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Country',
    name: 'country',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'State',
    name: 'state',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'FederalTaxID',
    name: 'federalTaxId',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxCode',
    name: 'taxCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BuildingFloorRoom',
    name: 'buildingFloorRoom',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressType',
    name: 'addressType',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'AddressName2',
    name: 'addressName2',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'AddressName3',
    name: 'addressName3',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TypeOfAddress',
    name: 'typeOfAddress',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'StreetNo',
    name: 'streetNo',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'BPCode',
    name: 'bpCode',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'RowNum',
    name: 'rowNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'GlobalLocationNumber',
    name: 'globalLocationNumber',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Nationality',
    name: 'nationality',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'TaxOffice',
    name: 'taxOffice',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GSTIN',
    name: 'gstin',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'GstType',
    name: 'gstType',
    type: 'Edm.Enum',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BpAddress {
    return deserializeComplexTypeV4(json, BpAddress);
  }
}
