/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BoBpAccountTypes } from './BoBpAccountTypes';
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
 * BpAccountReceivablePayble
 */
export interface BpAccountReceivablePayble<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Account Type.
   * @nullable
   */
  accountType?: DeserializedType<DeSerializersT, 'Edm.Enum'>;
  /**
   * Account Code.
   * @nullable
   */
  accountCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Bp Code.
   * @nullable
   */
  bpCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * BpAccountReceivablePaybleField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BpAccountReceivablePaybleField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BpAccountReceivablePayble,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BpAccountReceivablePayble.accountType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountType: EnumField<
    EntityT,
    DeSerializersT,
    BoBpAccountTypes,
    true,
    false
  > = this._fieldBuilder.buildEnumField('AccountType', BoBpAccountTypes, true);
  /**
   * Representation of the {@link BpAccountReceivablePayble.accountCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  accountCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AccountCode', 'Edm.String', true);
  /**
   * Representation of the {@link BpAccountReceivablePayble.bpCode} property for query construction.
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
   * Creates an instance of BpAccountReceivablePaybleField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      BpAccountReceivablePayble,
      fieldOptions
    );
  }
}

export namespace BpAccountReceivablePayble {
  /**
   * Metadata information on all properties of the `BpAccountReceivablePayble` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BpAccountReceivablePayble>[] =
    [
      {
        originalName: 'AccountType',
        name: 'accountType',
        type: 'Edm.Enum',
        isCollection: false
      },
      {
        originalName: 'AccountCode',
        name: 'accountCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'BPCode',
        name: 'bpCode',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
