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
 * BusinessPlaceTributaryInfo
 */
export interface BusinessPlaceTributaryInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Bplid.
   * @nullable
   */
  bplid?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tributary Id.
   * @nullable
   */
  tributaryId?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tributary Type.
   * @nullable
   */
  tributaryType?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Tt Start Date.
   * @nullable
   */
  ttStartDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Tt End Date.
   * @nullable
   */
  ttEndDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Tributary Regime Code.
   * @nullable
   */
  tributaryRegimeCode?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Trc Start Date.
   * @nullable
   */
  trcStartDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
  /**
   * Trc End Date.
   * @nullable
   */
  trcEndDate?: DeserializedType<DeSerializersT, 'Edm.DateTimeOffset'>;
}

/**
 * BusinessPlaceTributaryInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class BusinessPlaceTributaryInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  BusinessPlaceTributaryInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link BusinessPlaceTributaryInfo.bplid} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  bplid: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('BPLID', 'Edm.Int32', true);
  /**
   * Representation of the {@link BusinessPlaceTributaryInfo.tributaryId} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryId: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TributaryID', 'Edm.Int32', true);
  /**
   * Representation of the {@link BusinessPlaceTributaryInfo.tributaryType} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryType: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TributaryType', 'Edm.Int32', true);
  /**
   * Representation of the {@link BusinessPlaceTributaryInfo.ttStartDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ttStartDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TTStartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BusinessPlaceTributaryInfo.ttEndDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ttEndDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TTEndDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BusinessPlaceTributaryInfo.tributaryRegimeCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tributaryRegimeCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TributaryRegimeCode',
    'Edm.Int32',
    true
  );
  /**
   * Representation of the {@link BusinessPlaceTributaryInfo.trcStartDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trcStartDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TRCStartDate',
    'Edm.DateTimeOffset',
    true
  );
  /**
   * Representation of the {@link BusinessPlaceTributaryInfo.trcEndDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trcEndDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTimeOffset',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField(
    'TRCEndDate',
    'Edm.DateTimeOffset',
    true
  );

  /**
   * Creates an instance of BusinessPlaceTributaryInfoField.
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
      BusinessPlaceTributaryInfo,
      fieldOptions
    );
  }
}

export namespace BusinessPlaceTributaryInfo {
  /**
   * Metadata information on all properties of the `BusinessPlaceTributaryInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BusinessPlaceTributaryInfo>[] =
    [
      {
        originalName: 'BPLID',
        name: 'bplid',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TributaryID',
        name: 'tributaryId',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TributaryType',
        name: 'tributaryType',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TTStartDate',
        name: 'ttStartDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'TTEndDate',
        name: 'ttEndDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'TributaryRegimeCode',
        name: 'tributaryRegimeCode',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'TRCStartDate',
        name: 'trcStartDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      },
      {
        originalName: 'TRCEndDate',
        name: 'trcEndDate',
        type: 'Edm.DateTimeOffset',
        isCollection: false
      }
    ];
}
