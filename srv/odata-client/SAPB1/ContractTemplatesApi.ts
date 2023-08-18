/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContractTemplates } from './ContractTemplates';
import { ContractTemplatesRequestBuilder } from './ContractTemplatesRequestBuilder';
import { ItemsApi } from './ItemsApi';
import { ServiceContractsApi } from './ServiceContractsApi';
import { BoYesNoEnum } from './BoYesNoEnum';
import { BoRemindUnits } from './BoRemindUnits';
import { BoResolutionUnits } from './BoResolutionUnits';
import { BoContractTypes } from './BoContractTypes';
import { BoResponseUnit } from './BoResponseUnit';
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
  Time,
  OrderableEdmTypeField,
  EnumField,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ContractTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ContractTemplates<DeSerializersT>, DeSerializersT>
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
  ): ContractTemplatesApi<DeSerializersT> {
    return new ContractTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      ContractTemplates<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceContracts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACTS: OneToManyLink<
      ContractTemplates<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ItemsApi<DeSerializersT>, ServiceContractsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ITEMS: new OneToManyLink('Items', this, linkedApis[0]),
      SERVICE_CONTRACTS: new OneToManyLink(
        'ServiceContracts',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ContractTemplates;

  requestBuilder(): ContractTemplatesRequestBuilder<DeSerializersT> {
    return new ContractTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ContractTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ContractTemplates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ContractTemplates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ContractTemplates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ContractTemplates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE_NAME: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE_IS_DELETED: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TEMPLATE_IS_RENEWAL: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REMIND_BEFORE_RENEWAL: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    REMIND_UNIT: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoRemindUnits,
      true,
      true
    >;
    DURATION_OF_COVERAGE: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RESPONSE_VALUE: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RESOLUTION_UNIT: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoResolutionUnits,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_TYPE: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoContractTypes,
      true,
      true
    >;
    MONDAY_ENABLED: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    TUESDAY_ENABLED: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    WEDNESDAY_ENABLED: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    THURSDAY_ENABLED: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    FRIDAY_ENABLED: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SATURDAY_ENABLED: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    SUNDAY_ENABLED: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    MONDAY_START: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    MONDAY_END: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    TUESDAY_START: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    TUESDAY_END: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    WEDNESDAY_START: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    WEDNESDAY_END: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    THURSDAY_START: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    THURSDAY_END: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    FRIDAY_START: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    FRIDAY_END: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SATURDAY_START: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SATURDAY_END: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SUNDAY_START: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    SUNDAY_END: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.TimeOfDay',
      true,
      true
    >;
    INCLUDE_PARTS: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_LABOR: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    INCLUDE_TRAVEL: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    REMARKS: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCLUDE_HOLIDAYS: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoYesNoEnum,
      true,
      true
    >;
    RESPONSE_UNIT: EnumField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      BoResponseUnit,
      true,
      true
    >;
    RESOLUTION_TIME: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ATTACHMENT_ENTRY: OrderableEdmTypeField<
      ContractTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link items} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ITEMS: OneToManyLink<
      ContractTemplates<DeSerializersT>,
      DeSerializersT,
      ItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link serviceContracts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SERVICE_CONTRACTS: OneToManyLink<
      ContractTemplates<DeSerializersT>,
      DeSerializersT,
      ServiceContractsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ContractTemplates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link templateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'TemplateName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link templateIsDeleted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_IS_DELETED: fieldBuilder.buildEnumField(
          'TemplateIsDeleted',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link templateIsRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_IS_RENEWAL: fieldBuilder.buildEnumField(
          'TemplateIsRenewal',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link remindBeforeRenewal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMIND_BEFORE_RENEWAL: fieldBuilder.buildEdmTypeField(
          'RemindBeforeRenewal',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link remindUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMIND_UNIT: fieldBuilder.buildEnumField(
          'RemindUnit',
          BoRemindUnits,
          true
        ),
        /**
         * Static representation of the {@link durationOfCoverage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DURATION_OF_COVERAGE: fieldBuilder.buildEdmTypeField(
          'DurationOfCoverage',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link responseValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_VALUE: fieldBuilder.buildEdmTypeField(
          'ResponseValue',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link resolutionUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_UNIT: fieldBuilder.buildEnumField(
          'ResolutionUnit',
          BoResolutionUnits,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_TYPE: fieldBuilder.buildEnumField(
          'ContractType',
          BoContractTypes,
          true
        ),
        /**
         * Static representation of the {@link mondayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_ENABLED: fieldBuilder.buildEnumField(
          'MondayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link tuesdayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_ENABLED: fieldBuilder.buildEnumField(
          'TuesdayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link wednesdayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_ENABLED: fieldBuilder.buildEnumField(
          'WednesdayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link thursdayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_ENABLED: fieldBuilder.buildEnumField(
          'ThursdayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link fridayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_ENABLED: fieldBuilder.buildEnumField(
          'FridayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link saturdayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_ENABLED: fieldBuilder.buildEnumField(
          'SaturdayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link sundayEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_ENABLED: fieldBuilder.buildEnumField(
          'SundayEnabled',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link mondayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_START: fieldBuilder.buildEdmTypeField(
          'MondayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link mondayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONDAY_END: fieldBuilder.buildEdmTypeField(
          'MondayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link tuesdayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_START: fieldBuilder.buildEdmTypeField(
          'TuesdayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link tuesdayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUESDAY_END: fieldBuilder.buildEdmTypeField(
          'TuesdayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link wednesdayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_START: fieldBuilder.buildEdmTypeField(
          'WednesdayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link wednesdayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEDNESDAY_END: fieldBuilder.buildEdmTypeField(
          'WednesdayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link thursdayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_START: fieldBuilder.buildEdmTypeField(
          'ThursdayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link thursdayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THURSDAY_END: fieldBuilder.buildEdmTypeField(
          'ThursdayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link fridayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_START: fieldBuilder.buildEdmTypeField(
          'FridayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link fridayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FRIDAY_END: fieldBuilder.buildEdmTypeField(
          'FridayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link saturdayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_START: fieldBuilder.buildEdmTypeField(
          'SaturdayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link saturdayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SATURDAY_END: fieldBuilder.buildEdmTypeField(
          'SaturdayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link sundayStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_START: fieldBuilder.buildEdmTypeField(
          'SundayStart',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link sundayEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUNDAY_END: fieldBuilder.buildEdmTypeField(
          'SundayEnd',
          'Edm.TimeOfDay',
          true
        ),
        /**
         * Static representation of the {@link includeParts} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_PARTS: fieldBuilder.buildEnumField(
          'IncludeParts',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includeLabor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_LABOR: fieldBuilder.buildEnumField(
          'IncludeLabor',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link includeTravel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_TRAVEL: fieldBuilder.buildEnumField(
          'IncludeTravel',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link remarks} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REMARKS: fieldBuilder.buildEdmTypeField('Remarks', 'Edm.String', true),
        /**
         * Static representation of the {@link includeHolidays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCLUDE_HOLIDAYS: fieldBuilder.buildEnumField(
          'IncludeHolidays',
          BoYesNoEnum,
          true
        ),
        /**
         * Static representation of the {@link responseUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESPONSE_UNIT: fieldBuilder.buildEnumField(
          'ResponseUnit',
          BoResponseUnit,
          true
        ),
        /**
         * Static representation of the {@link resolutionTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION_TIME: fieldBuilder.buildEdmTypeField(
          'ResolutionTime',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link attachmentEntry} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACHMENT_ENTRY: fieldBuilder.buildEdmTypeField(
          'AttachmentEntry',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ContractTemplates)
      };
    }

    return this._schema;
  }
}
