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
 * ReportTypeParams
 */
export interface ReportTypeParams<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Type Code.
   * @nullable
   */
  typeCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type Name.
   * @nullable
   */
  typeName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Addon Name.
   * @nullable
   */
  addonName?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Addon Form Type.
   * @nullable
   */
  addonFormType?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Menu Id.
   * @nullable
   */
  menuId?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ReportTypeParamsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ReportTypeParamsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ReportTypeParams,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link ReportTypeParams.typeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TypeCode', 'Edm.String', true);
  /**
   * Representation of the {@link ReportTypeParams.typeName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  typeName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TypeName', 'Edm.String', true);
  /**
   * Representation of the {@link ReportTypeParams.addonName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addonName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddonName', 'Edm.String', true);
  /**
   * Representation of the {@link ReportTypeParams.addonFormType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  addonFormType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('AddonFormType', 'Edm.String', true);
  /**
   * Representation of the {@link ReportTypeParams.menuId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  menuId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('MenuID', 'Edm.String', true);

  /**
   * Creates an instance of ReportTypeParamsField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, ReportTypeParams, fieldOptions);
  }
}

export namespace ReportTypeParams {
  /**
   * Metadata information on all properties of the `ReportTypeParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ReportTypeParams>[] = [
    {
      originalName: 'TypeCode',
      name: 'typeCode',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TypeName',
      name: 'typeName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddonName',
      name: 'addonName',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'AddonFormType',
      name: 'addonFormType',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'MenuID',
      name: 'menuId',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
