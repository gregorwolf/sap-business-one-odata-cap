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
 * AccountSegmentationsCategory
 */
export interface AccountSegmentationsCategory<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Segment Id.
   * @nullable
   */
  segmentId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Code.
   * @nullable
   */
  code?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Short Name.
   * @nullable
   */
  shortName?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * AccountSegmentationsCategoryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class AccountSegmentationsCategoryField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  AccountSegmentationsCategory,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link AccountSegmentationsCategory.segmentId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  segmentId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SegmentID', 'Edm.Int32', true);
  /**
   * Representation of the {@link AccountSegmentationsCategory.code} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  code: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Code', 'Edm.String', true);
  /**
   * Representation of the {@link AccountSegmentationsCategory.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link AccountSegmentationsCategory.shortName} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  shortName: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('ShortName', 'Edm.String', true);

  /**
   * Creates an instance of AccountSegmentationsCategoryField.
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
      AccountSegmentationsCategory,
      fieldOptions
    );
  }
}

export namespace AccountSegmentationsCategory {
  /**
   * Metadata information on all properties of the `AccountSegmentationsCategory` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<AccountSegmentationsCategory>[] =
    [
      {
        originalName: 'SegmentID',
        name: 'segmentId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'Code',
        name: 'code',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'Name',
        name: 'name',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'ShortName',
        name: 'shortName',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
