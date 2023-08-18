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
 * DnfCodeSetupParams
 */
export interface DnfCodeSetupParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Ncm Code.
   * @nullable
   */
  ncmCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Dnf Code.
   * @nullable
   */
  dnfCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * DnfCodeSetupParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class DnfCodeSetupParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  DnfCodeSetupParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link DnfCodeSetupParams.absEntry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  absEntry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AbsEntry', 'Edm.Int32', true);
  /**
   * Representation of the {@link DnfCodeSetupParams.ncmCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ncmCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('NCMCode', 'Edm.Int32', true);
  /**
   * Representation of the {@link DnfCodeSetupParams.dnfCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  dnfCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DNFCode', 'Edm.String', true);

  /**
   * Creates an instance of DnfCodeSetupParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, DnfCodeSetupParams, fieldOptions);
  }
}

export namespace DnfCodeSetupParams {
  /**
   * Metadata information on all properties of the `DnfCodeSetupParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<DnfCodeSetupParams>[] = [
    {
      originalName: 'AbsEntry',
      name: 'absEntry',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'NCMCode',
      name: 'ncmCode',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'DNFCode',
      name: 'dnfCode',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
