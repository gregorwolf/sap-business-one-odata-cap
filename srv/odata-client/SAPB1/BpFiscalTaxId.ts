/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoAddressType } from './BoAddressType';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CollectionField,
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  EnumField,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v4';

/**
 * BpFiscalTaxId
 */
export interface BpFiscalTaxId<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Address.
   * @nullable
   */
  address?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Cnae Code.
   * @nullable
   */
  cnaeCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tax Id 0.
   * @nullable
   */
  taxId0?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 1.
   * @nullable
   */
  taxId1?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 2.
   * @nullable
   */
  taxId2?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 3.
   * @nullable
   */
  taxId3?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 4.
   * @nullable
   */
  taxId4?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 5.
   * @nullable
   */
  taxId5?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 6.
   * @nullable
   */
  taxId6?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 7.
   * @nullable
   */
  taxId7?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 8.
   * @nullable
   */
  taxId8?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 9.
   * @nullable
   */
  taxId9?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 10.
   * @nullable
   */
  taxId10?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 11.
   * @nullable
   */
  taxId11?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Addr Type.
   * @nullable
   */
  addrType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Id 12.
   * @nullable
   */
  taxId12?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tax Id 13.
   * @nullable
   */
  taxId13?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * A To Retr N Fe.
   * @nullable
   */
  aToRetrNFe?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Tax Id 14.
   * @nullable
   */
  taxId14?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BpFiscalTaxIdField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpFiscalTaxIdField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpFiscalTaxId,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpFiscalTaxId.address} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  address: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Address', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.cnaeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  cnaeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('CNAECode', 'Edm.Int32', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId0} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId0: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId0', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId1} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId1: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId1', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId2} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId2: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId2', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId3} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId3: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId3', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId4} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId4: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId4', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId5} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId5: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId5', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId6} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId6: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId6', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId7} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId7: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId7', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId8} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId8: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId8', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId9} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId9: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId9', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId10} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId10: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId10', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId11} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId11: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId11', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.bpCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bpCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.addrType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addrType: EnumField<EntityT, DeSerializersT, BoAddressType, true, false> =
    this._fieldBuilder.buildEnumField('AddrType', BoAddressType, true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId12} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId12: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId12', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId13} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId13: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId13', 'Edm.String', true);
  /**
   * Representation of the {@link BpFiscalTaxId.aToRetrNFe} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  aToRetrNFe: EnumField<EntityT, DeSerializersT, BoYesNoEnum, true, false> =
    this._fieldBuilder.buildEnumField('AToRetrNFe', BoYesNoEnum, true);
  /**
   * Representation of the {@link BpFiscalTaxId.taxId14} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  taxId14: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TaxId14', 'Edm.String', true);

  /**
   * Creates an instance of BpFiscalTaxIdField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, BpFiscalTaxId, fieldOptions);
  }
}

export namespace BpFiscalTaxId {
  /**
   * Metadata information on all properties of the `BpFiscalTaxId` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpFiscalTaxId>[] = [
    {
      originalName: 'Address',
      name: 'address',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'CNAECode',
      name: 'cnaeCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'TaxId0',
      name: 'taxId0',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId1',
      name: 'taxId1',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId2',
      name: 'taxId2',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId3',
      name: 'taxId3',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId4',
      name: 'taxId4',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId5',
      name: 'taxId5',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId6',
      name: 'taxId6',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId7',
      name: 'taxId7',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId8',
      name: 'taxId8',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId9',
      name: 'taxId9',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId10',
      name: 'taxId10',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId11',
      name: 'taxId11',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'BPCode',
      name: 'bpCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddrType',
      name: 'addrType',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxId12',
      name: 'taxId12',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TaxId13',
      name: 'taxId13',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AToRetrNFe',
      name: 'aToRetrNFe',
      type: 'Edm.Enum',
      isCollection: false
    },
    {
      originalName: 'TaxId14',
      name: 'taxId14',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
