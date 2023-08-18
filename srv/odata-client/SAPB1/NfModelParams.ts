/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
 * NfModelParams
 */
export interface NfModelParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Nfm Name.
   * @nullable
   */
  nfmName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Nfm Description.
   * @nullable
   */
  nfmDescription?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Nfm Code.
   * @nullable
   */
  nfmCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * NfModelParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class NfModelParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  NfModelParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link NfModelParams.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.String', true);
  /**
   * Representation of the {@link NfModelParams.nfmName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NFMName', 'Edm.String', true);
  /**
   * Representation of the {@link NfModelParams.nfmDescription} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmDescription: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'NFMDescription',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link NfModelParams.nfmCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  nfmCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NFMCode', 'Edm.String', true);

  /**
   * Creates an instance of NfModelParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, NfModelParams, fieldOptions);
  }
}

export namespace NfModelParams {
  /**
   * Metadata information on all properties of the `NfModelParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<NfModelParams>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NFMName',
      name: 'nfmName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NFMDescription',
      name: 'nfmDescription',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'NFMCode',
      name: 'nfmCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
