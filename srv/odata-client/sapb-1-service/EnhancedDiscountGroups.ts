/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EnhancedDiscountGroupsRequestBuilder } from './EnhancedDiscountGroupsRequestBuilder';
import { Moment } from 'moment';
import { DiscountGroupLine } from './DiscountGroupLine';
import { DiscountGroupTypeEnum } from './DiscountGroupTypeEnum';
import { DiscountGroupRelationsEnum } from './DiscountGroupRelationsEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { AllFields, CollectionField, CustomFieldV4, DateField, EntityBuilderType, EntityV4, EnumField, Field, NumberField, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EnhancedDiscountGroups" of service "SAPB1".
 */
export class EnhancedDiscountGroups extends EntityV4 implements EnhancedDiscountGroupsType {
  /**
   * Technical entity name for EnhancedDiscountGroups.
   */
  static _entityName = 'EnhancedDiscountGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/b1s/v2/';
  /**
   * Abs Entry.
   * @nullable
   */
  absEntry?: number;
  /**
   * Type.
   * @nullable
   */
  type?: DiscountGroupTypeEnum;
  /**
   * Object Code.
   * @nullable
   */
  objectCode?: string;
  /**
   * Discount Relations.
   * @nullable
   */
  discountRelations?: DiscountGroupRelationsEnum;
  /**
   * Active.
   * @nullable
   */
  active?: BoYesNoEnum;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: Moment;
  /**
   * Discount Group Line Collection.
   * @nullable
   */
  discountGroupLineCollection?: DiscountGroupLine[];

  /**
   * Returns an entity builder to construct instances of `EnhancedDiscountGroups`.
   * @returns A builder that constructs instances of entity type `EnhancedDiscountGroups`.
   */
  static builder(): EntityBuilderType<EnhancedDiscountGroups, EnhancedDiscountGroupsType> {
    return EntityV4.entityBuilder(EnhancedDiscountGroups);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EnhancedDiscountGroups` entity type.
   * @returns A `EnhancedDiscountGroups` request builder.
   */
  static requestBuilder(): EnhancedDiscountGroupsRequestBuilder {
    return new EnhancedDiscountGroupsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EnhancedDiscountGroups`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EnhancedDiscountGroups`.
   */
  static customField(fieldName: string): CustomFieldV4<EnhancedDiscountGroups> {
    return EntityV4.customFieldSelector(fieldName, EnhancedDiscountGroups);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EnhancedDiscountGroupsType {
  absEntry?: number | null;
  type?: DiscountGroupTypeEnum | null;
  objectCode?: string | null;
  discountRelations?: DiscountGroupRelationsEnum | null;
  active?: BoYesNoEnum | null;
  validFrom?: Moment | null;
  validTo?: Moment | null;
  discountGroupLineCollection?: DiscountGroupLine[] | null;
}

export namespace EnhancedDiscountGroups {
  /**
   * Static representation of the [[absEntry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABS_ENTRY: NumberField<EnhancedDiscountGroups> = new NumberField('AbsEntry', EnhancedDiscountGroups, 'Edm.Int32');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: EnumField<EnhancedDiscountGroups> = new EnumField('Type', EnhancedDiscountGroups);
  /**
   * Static representation of the [[objectCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_CODE: StringField<EnhancedDiscountGroups> = new StringField('ObjectCode', EnhancedDiscountGroups, 'Edm.String');
  /**
   * Static representation of the [[discountRelations]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_RELATIONS: EnumField<EnhancedDiscountGroups> = new EnumField('DiscountRelations', EnhancedDiscountGroups);
  /**
   * Static representation of the [[active]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ACTIVE: EnumField<EnhancedDiscountGroups> = new EnumField('Active', EnhancedDiscountGroups);
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<EnhancedDiscountGroups> = new DateField('ValidFrom', EnhancedDiscountGroups, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<EnhancedDiscountGroups> = new DateField('ValidTo', EnhancedDiscountGroups, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[discountGroupLineCollection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISCOUNT_GROUP_LINE_COLLECTION: CollectionField<EnhancedDiscountGroups, DiscountGroupLine> = new CollectionField('DiscountGroupLineCollection', EnhancedDiscountGroups, DiscountGroupLine);
  /**
   * All fields of the EnhancedDiscountGroups entity.
   */
  export const _allFields: Array<NumberField<EnhancedDiscountGroups> | EnumField<EnhancedDiscountGroups> | StringField<EnhancedDiscountGroups> | DateField<EnhancedDiscountGroups> | CollectionField<EnhancedDiscountGroups, DiscountGroupLine>> = [
    EnhancedDiscountGroups.ABS_ENTRY,
    EnhancedDiscountGroups.TYPE,
    EnhancedDiscountGroups.OBJECT_CODE,
    EnhancedDiscountGroups.DISCOUNT_RELATIONS,
    EnhancedDiscountGroups.ACTIVE,
    EnhancedDiscountGroups.VALID_FROM,
    EnhancedDiscountGroups.VALID_TO,
    EnhancedDiscountGroups.DISCOUNT_GROUP_LINE_COLLECTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EnhancedDiscountGroups> = new AllFields('*', EnhancedDiscountGroups);
  /**
   * All key fields of the EnhancedDiscountGroups entity.
   */
  export const _keyFields: Array<Field<EnhancedDiscountGroups>> = [EnhancedDiscountGroups.ABS_ENTRY];
  /**
   * Mapping of all key field names to the respective static field property EnhancedDiscountGroups.
   */
  export const _keys: { [keys: string]: Field<EnhancedDiscountGroups> } = EnhancedDiscountGroups._keyFields.reduce((acc: { [keys: string]: Field<EnhancedDiscountGroups> }, field: Field<EnhancedDiscountGroups>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
