/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TrackingNotes } from './TrackingNotes';
import { TrackingNotesRequestBuilder } from './TrackingNotesRequestBuilder';
import { TrackingNoteItem } from './TrackingNoteItem';
import { TrackingNoteBroker } from './TrackingNoteBroker';
import { BoYesNoEnum } from './BoYesNoEnum';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  CollectionField
} from '@sap-cloud-sdk/odata-v4';
export class TrackingNotesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TrackingNotes<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): TrackingNotesApi<DeSerializersT> {
    return new TrackingNotesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TrackingNotes;

  requestBuilder(): TrackingNotesRequestBuilder<DeSerializersT> {
    return new TrackingNotesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TrackingNotes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TrackingNotes<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TrackingNotes<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TrackingNotes, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TrackingNotes, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TRACKING_NOTE_NUMBER: OrderableEdmTypeField<
      TrackingNotes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CCD_NUMBER: OrderableEdmTypeField<
      TrackingNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      TrackingNotes<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CUSTOMS_TERMINAL: OrderableEdmTypeField<
      TrackingNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_OF_ORIGIN: OrderableEdmTypeField<
      TrackingNotes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_DIRECT_IMPORT: EnumField<
      TrackingNotes<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TRACKING_NOTE_ITEM_COLLECTION: CollectionField<
      TrackingNotes<DeSerializers>,
      DeSerializersT,
      TrackingNoteItem,
      true,
      true
    >;
    TRACKING_NOTE_BROKER_COLLECTION: CollectionField<
      TrackingNotes<DeSerializers>,
      DeSerializersT,
      TrackingNoteBroker,
      true,
      true
    >;
    ALL_FIELDS: AllFields<TrackingNotes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link trackingNoteNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_NOTE_NUMBER: fieldBuilder.buildEdmTypeField(
          'TrackingNoteNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link ccdNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CCD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CCDNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link customsTerminal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMS_TERMINAL: fieldBuilder.buildEdmTypeField(
          'CustomsTerminal',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryOfOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_OF_ORIGIN: fieldBuilder.buildEdmTypeField(
          'CountryOfOrigin',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isDirectImport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DIRECT_IMPORT: fieldBuilder.buildEnumField(
          'IsDirectImport',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link trackingNoteItemCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_NOTE_ITEM_COLLECTION: fieldBuilder.buildCollectionField(
          'TrackingNoteItemCollection',
          TrackingNoteItem,
          true
        ),
        /**
         * Static representation of the {@link trackingNoteBrokerCollection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACKING_NOTE_BROKER_COLLECTION: fieldBuilder.buildCollectionField(
          'TrackingNoteBrokerCollection',
          TrackingNoteBroker,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TrackingNotes)
      };
    }

    return this._schema;
  }
}
